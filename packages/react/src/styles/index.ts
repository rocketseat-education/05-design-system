import { createStitches, defaultThemeMap } from '@stitches/react'

import {
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
} from '@ignite-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },

  theme: {
    colors,
    space,
    fontSizes,
    fonts,
    fontWeights,
    lineHeights,
    radii,
  },
})
