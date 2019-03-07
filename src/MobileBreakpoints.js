
import { css } from 'styled-components'

const sizes = {
  giant: {w:992,h:992},
  desktop: {w:768,h:768},
  tablet: {w:572,h:572},
  phablet: {w:376,h:376}
}

export const media =Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label].w / 16}em) and (min-height: ${sizes[label].h / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})