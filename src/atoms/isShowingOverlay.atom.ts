import { atom } from "recoil";

export const isShowingOverlayAtom = atom<boolean>({
  key: "isShowingOverlay",
  default: false,
});
