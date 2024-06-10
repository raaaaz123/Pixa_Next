"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
import { useToast } from "@chakra-ui/react";
import ReactCrop from "react-image-crop";
import axios from "axios";
import { calculateAlignments, calculatePxFromSize, cropImage, saveFile, shortenName } from "@/utils/utils";
import { useCropOptions, useSelectedRatio, useSelectedSize } from "@/utils/store";
import { CropPanel, CropPanelProps } from "./CropPanel";
import ImageDropzone from "./ImageDropzone";
import { OnPreparedImageFn } from "@/types/types";
import Image from "next/image";
const BASE_URL = 'https://api.novita.ai/v3/async/task-result?task_id=';
const AUTH_TOKEN = 'Bearer 0795cb8d-20b9-4275-af59-387b6b4f7543';

export const Cropper = () => {
  const toast = useToast();
  const [base64, setBase64] = useState("");
  const [filename, setFilename] = useState("");
  const shortenedName = useMemo(() => shortenName(filename), [filename]);
  const [crop, setCrop] = useState<ReactCrop.Crop>({});
  const imgRef = useRef<HTMLImageElement | null>(null);
  const { ruleOfThirds, locked } = useCropOptions();
  const [imageUrl, setImageUrl] = useState("");
  // Adjust crop when aspect ratio is clicked.
  const selectedRatio = useSelectedRatio();
  useEffect(() => {
    setCrop(({ x, y, height, unit }) => {
      return { x, y, height, unit, aspect: selectedRatio.value?.aspect };
    });
  }, [selectedRatio.value?.aspect]);

  // Adjust crop height/width when Size preset clicked.
  const selectedSize = useSelectedSize();
  useEffect(() => {
    if (!selectedSize.value || !imgRef.current) return;
    setCrop(({ aspect }) => {
      const key = _getKey(imgRef.current!, aspect);
      const value = calculatePxFromSize(imgRef.current![key], selectedSize.value!);

      // If an aspect is not set, we need to set a value for the opposite measurement (height/width)
      // Otherwise the crop selection will disappear.
      const rest: Partial<ReactCrop.Crop> = {};
      if (!aspect) {
        const key2 = key === "height" ? "width" : "height";
        rest[key2] = calculatePxFromSize(imgRef.current![key2], selectedSize.value!);
      }

      return { ...rest, [key]: value, aspect: aspect, x: 0, y: 0 };
    });
  }, [selectedSize.value]);

  const onImageLoad = useCallback((img: HTMLImageElement) => {
    imgRef.current = img;
    setTimeout(() => {
      setCrop(({ aspect }) => {
        const width = aspect ? undefined : img.width / 2;
        return { height: img.height / 2, width, x: 0, y: 0, aspect };
      });
    }, 100);
  }, []);

  const onCropChange = (newCrop: ReactCrop.Crop, percentCrop: ReactCrop.PercentCrop) => {
    setCrop(newCrop);
    // If size preset is set, make sure newCrop width/height matches the result of calculatePxFromSize
    if (selectedSize.value) {
      const key = _getKey(imgRef.current!, newCrop.aspect);
      const value = calculatePxFromSize(imgRef.current![key], selectedSize.value!);
      if (value !== newCrop[key]) selectedSize.set(null);
    }
  };

  const onPreparedImage: OnPreparedImageFn = async (base64, name) => {
    setBase64(base64);
    setFilename(name);
  };

  const onSaveClicked = async () => {
    if (!base64) {
      toast({
        title: "No image to save",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", base64);
    formData.append("upload_preset", "i2tmy3tz"); // Replace with your upload preset from Cloudinary

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dsrrcmmig/image/upload`, // Replace with your Cloudinary cloud name
        formData
      );

      const imageUrl = response.data.secure_url;
      toast({
        title: "Image uploaded successfully",
        description: imageUrl,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      console.log("Image URL:", imageUrl);
      makeApiCall(imageUrl);
    } catch (error) {
      toast({
        title: "Error uploading image",
        description:"error",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const makeApiCall = async (img_url: string) => {
    const url = 'https://api.novita.ai/v3/async/instant-id';
    const requestData = {
      extra: {
        response_image_type: "jpeg",
        enterprise_plan: {
          enabled: false
        }
      },
      model_name: "sdxlUnstableDiffusers_v11_216694.safetensors",
  
      face_image_urls: [
        img_url
      ],


      prompt: "concept art of a man . digital artwork, illustrative, painterly, matte painting, highly detailed",
      negative_prompt: "realistic, photo-realistic, bad quality, bad anatomy, worst quality, low quality, lowres, extra fingers, blur, blurry, ugly, wrong proportions, watermark, image artifacts, bad eyes, bad hands, bad arms",
      width: 768,
      height: 1024,
      image_num: 1,
      steps: 25,
      seed: -1,
      guidance_scale: 7.5,
      sampler_name: "Euler a"
    };
  
    try {
      const response = await axios.post(url, requestData, {
        headers: {
          Authorization: "Bearer 0795cb8d-20b9-4275-af59-387b6b4f7543",
          'Content-Type': 'application/json'
        }
      });
  
      const taskId = response.data.task_id;
      console.log(taskId);
      checkTaskStatus(taskId);
    } catch (error) {
      console.error('Error making API call:', error);
      toast({
        title: "Error",
        description: "Error making API call",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const checkTaskStatus = async (taskId: string) => {
    const url = `${BASE_URL}${taskId}`;
    console.log(url);

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: "Bearer 0795cb8d-20b9-4275-af59-387b6b4f7543"
        }
      });

      const status = response.data.task.status;
      if (status === 'TASK_STATUS_SUCCEED') {
        console.error('Setttttt');
        console.log(status)
        const images = response.data.images;
        console.log(images)
        if (images.length > 0) {
          const imageUrl = images[0].image_url;
          console.log(imageUrl)
          setImageUrl(imageUrl);
        //set imageurl to a new Imageview 
          
        } else {
          console.error('No images found in the response');
        }
      } else if (status === 'TASK_STATUS_FAILED') {
        toast({
          title: "Error",
          description: "Face Not Found. Please select a photo with a clear face.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log(status);
      } else {
        console.log(status);
         checkTaskStatus(taskId);  // Retry after 5 seconds
      }
    } catch (error) {
      console.error('Error checking task status:', error);
    }
  };

  

  const onUnloadClicked = () => {
    imgRef.current = null;
    setBase64("");
    setFilename("");
  };

  const width = imgRef.current?.width;
  const height = imgRef.current?.height;
  const computedAlignments = useMemo(
    () => calculateAlignments({ height, width }, { height: crop.height, width: crop.width }),
    [height, crop.height, crop.width, width]
  );

  const onAlignmentChange: CropPanelProps["onAlignmentChange"] = (alignment, pos) => {
    setCrop((crop) => ({
      ...crop,
      [pos]: computedAlignments[pos][alignment],
    }));
  };

  return (
    <div className={"flex justify-center pb-10 pt-5"}>
      <div>
        <ImageDropzone onPreparedImage={onPreparedImage} visible={!imgRef.current} />

        <ReactCrop
          imageStyle={{ maxHeight: 500 }}
          style={{ boxShadow: "black 0px 0px 10px" }}
          src={base64}
          onImageLoaded={onImageLoad}
          ruleOfThirds={ruleOfThirds.value}
          locked={locked.value}
          crop={crop}
          onChange={onCropChange}
        />
        

        {imgRef.current && (
          <>
            <div className={"pt-2 pb-1.5"} title={filename}>
              {shortenedName} - {imgRef.current.naturalWidth}x{imgRef.current.naturalHeight}
            </div>

            <CropPanel
              crop={crop}
              image={imgRef.current}
              onPreparedImage={onPreparedImage}
              onSaveClicked={onSaveClicked}
              onAlignmentChange={onAlignmentChange}
              onUnloadClicked={onUnloadClicked}
            />
            
          </>
          
        )}
      </div>
      {imageUrl && (
  <div className="pt-2 pb-1.5" title="Image URL">
    <Image
      src="/assets/images/hero.png"
      alt="hero image"
      width={400}
      height={100}
      className="h-full min-h-[100px] object-cover object-center"
    />
  </div>
)}
        
    </div>
    
  );
};

const _getKey = (img: HTMLImageElement, aspect?: number) => {
  const { height, width } = img;
  let key: "width" | "height" = "width";
  const iaspect = width > height ? width / height : height / width;
  if (aspect && iaspect > aspect) {
    if (width > height) key = "height";
    else key = "width";
  }
  return key;
};

export default Cropper;
