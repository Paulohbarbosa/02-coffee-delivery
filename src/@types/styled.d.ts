import 'styled-components'
import { lightTheme } from '../styles/themes/defaultTheme'

type ThemeType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
