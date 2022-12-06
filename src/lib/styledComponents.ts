import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import { IThemeInterface } from "Types/theme";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider };
