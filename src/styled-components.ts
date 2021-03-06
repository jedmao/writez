import * as styledComponents from 'styled-components'

import { ITheme } from './theme'

const {
    default: styled,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>

export default styled
export { css, injectGlobal, keyframes, ThemeProvider } from 'styled-components'
