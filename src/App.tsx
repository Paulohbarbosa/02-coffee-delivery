import { ThemeProvider } from 'styled-components'

import { lightTheme } from './styles/themes/defaultTheme'
import { GlobalStyles } from './styles/global'
import { Home } from './pages/home'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  )
}
