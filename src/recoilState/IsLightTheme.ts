import { atom } from "recoil";

const isLightTheme = atom<boolean>({
  key: "IsLightTheme",
  default: false,
});

export default isLightTheme;
