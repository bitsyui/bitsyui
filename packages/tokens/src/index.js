import * as base from "./base/index.js";
import * as semantic from "./semantic/index.js";
import { darkTheme } from "./themes/dark.js";
import { lightTheme } from "./themes/light.js";

export { base, semantic, darkTheme, lightTheme };

export const themes = {
  light: lightTheme,
  dark: darkTheme
};
