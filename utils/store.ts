import { IRatio, Size } from "@/types/types";
import { hookstate, useHookstate } from "@hookstate/core";


const selectedRatioState = 	hookstate<IRatio | null>(null);
export const useSelectedRatio = () => useHookstate(selectedRatioState);

const selectedSizeState = 	hookstate<Size | null>(null);
export const useSelectedSize = () => useHookstate(selectedSizeState);

const cropOptions = 	hookstate({
  ruleOfThirds: true,
  locked: false,
  // ratio: null as IRatio | null,
  // size: null as Size | null,
});
export const useCropOptions = () => useHookstate(cropOptions);
