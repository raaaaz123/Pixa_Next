import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
export default async function Home() {

  const events = await getAllEvents({
    query:'',
    category:'',
    page:1,
    limit:10
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-5">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className=" flex flex-col justify-center  gap-8">
            <h1 className="h1-bold">
            Create. Personalize. Enjoy.
            </h1>
            <p className="p-regular-20 md:p-regular-24">
            Welcome to Pixa Ai, your one-stop destination for creating realistic AI avatars and turning them into stunning personalized merchandise! Whether you're looking to design a unique t-shirt, a stylish mug, or a beautiful photo frame, we’ve got you covered.{" "}
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="https://play.google.com/store/apps/details?id=com.genai.aiphotoeditor">Download App</Link>
            </Button>
          </div>

          <Image
  src="https://i.ibb.co/1Rm84R0/Photo-Personalized-Gifts-removebg-preview.png"
  alt="hero"
  width={1500}
  height={1500}
  className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] transform scale-125"
/>

        </div>


        <section className="bg-white py-12">
  <div className="wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl md:text-4xl font-bold text-center text-primary-900 mb-8">Our Products/Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="flex flex-col items-center text-center">
        <Image
          src="https://cdn.hoodielab.com/wp-content/uploads/2020/01/Broken-Mens-Tshirt-Front-510x510.jpg.webp"
          alt="T-Shirt"
          width={400}
          height={400}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-primary-900 mb-2">T-Shirts</h3>
        <p className="text-primary-700">Comfortable, stylish, and customized with your unique avatar. Available in various sizes and colors.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image
          src="https://homafy.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-11-at-5.47.29-PM-1_11zon.jpeg"
          alt="Mug"
          width={400}
          height={400}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-primary-900 mb-2">Mugs</h3>
        <p className="text-primary-700">Start your day with a smile! Enjoy your favorite beverage in a personalized mug featuring your AI avatar.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image
          src="https://ih1.redbubble.net/image.4985119322.9544/st,small,507x507-pad,600x600,f8f8f8.jpg"
          alt="Photo Frame"
          width={400}
          height={400}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-primary-900 mb-2">Photo Frames</h3>
        <p className="text-primary-700">Capture memories in a beautiful photo frame designed with your avatar. Perfect for decorating your home or office.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image
          src="https://caseify.ai/cdn/shop/files/Hero_Image_CasefyAI.jpg?v=1693343205&width=3840"
          alt="Phone Case"
          width={400}
          height={400}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-primary-900 mb-2">Phone Cases</h3>
        <p className="text-primary-700">Protect your device in style. Our personalized phone cases are available for a wide range of models.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image
          src="https://images.itthemovie.com/wp-content/uploads/2023/12/Get-It-Now-Rihanna-And-Asap-Rocky-Hoodie-For-Mens-And-Womens-1.jpg"
          alt="Hoodie"
          width={400}
          height={400}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-primary-900 mb-2">Hoodies</h3>
        <p className="text-primary-700">Stay cozy and express your personality with a personalized hoodie featuring your unique avatar.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image
          src="https://m.media-amazon.com/images/I/61tMZ-LsKnL.jpg"
          alt="Canvas Print"
          width={400}
          height={400}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-primary-900 mb-2">Canvas Prints</h3>
        <p className="text-primary-700">Turn your avatar into a piece of art with high-quality canvas prints, perfect for any wall in your home.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image
          src="https://ih1.redbubble.net/image.5429023528.0403/st,small,507x507-pad,600x600,f8f8f8.u4.jpg"
          alt="Sticker"
          width={400}
          height={400}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-primary-900 mb-2">Stickers</h3>
        <p className="text-primary-700">Add a personal touch to your belongings with custom stickers of your avatar. Great for laptops, notebooks, and more.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image
          src="https://img.freepik.com/premium-photo/close-up-tote-bag-with-womans-face-generative-ai_955925-34946.jpg"
          alt="Tote Bag"
          width={400}
          height={400}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-primary-900 mb-2">Tote Bags</h3>
        <p className="text-primary-700">Carry your essentials in a stylish tote bag personalized with your AI avatar. Durable and eco-friendly.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image
          src="https://ih1.redbubble.net/image.4930124479.3046/throwpillow,small,1000x-bg,f8f8f8-c,0,200,1000,1000.jpg"
          alt="Pillow"
          width={400}
          height={400}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-primary-900 mb-2">Pillows</h3>
        <p className="text-primary-700">Relax with a cozy pillow featuring your personalized avatar design. Perfect for adding a unique touch to your living space.</p>
      </div>
    </div>
  </div>
</section>

      </section>

        <section className="bg-white py-12">
        <div className="wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary-900 mb-8">Why Choose AvatarArtistry?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Unleash Your Creativity</h3>
              <p className="text-primary-700">Transform your selfies into realistic AI avatars. Choose from various artistic styles to match your unique personality and taste.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Personalized Merchandise</h3>
              <p className="text-primary-700">From t-shirts to phone cases, our high-quality products are tailored to your preferences, making each item truly one-of-a-kind.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Easy to Use</h3>
              <p className="text-primary-700">Our user-friendly app makes it simple to create, customize, and order your products. In just a few clicks, you'll have your personalized items ready to be shipped to your doorstep.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Perfect for Any Occasion</h3>
              <p className="text-primary-700">Whether it's a gift for a loved one or a treat for yourself, our personalized products are perfect for birthdays, anniversaries, holidays, or any special occasion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-50 py-12">
        <div className="wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary-900 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-200 mb-4">
                <span className="text-2xl font-bold text-primary-900">1</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Create Your Avatar</h3>
              <p className="text-primary-700 mb-2">Upload your photo and let our advanced AI technology generate a realistic avatar.</p>
              <p className="text-primary-700">Choose from a range of artistic styles to give your avatar a unique look.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-200 mb-4">
                <span className="text-2xl font-bold text-primary-900">2</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Customize Your Merchandise</h3>
              <p className="text-primary-700 mb-2">Select from a variety of products including t-shirts, mugs, and photo frames.</p>
              <p className="text-primary-700">Personalize each item with your avatar and other design elements to make it uniquely yours.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-200 mb-4">
                <span className="text-2xl font-bold text-primary-900">3</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Place Your Order</h3>
              <p className="text-primary-700 mb-2">Review your designs and add them to your cart.</p>
              <p className="text-primary-700">Complete your purchase and get ready to receive your personalized items!</p>
            </div>
          </div>
        </div>
      </section>



    </>
  );
}
