import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

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
  theme: {
    colors,
    space,
    fontSizes,
    fonts,
    fontWeights,
    lineHeights,
    radii,
  },

  utils: {
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    px: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
})
