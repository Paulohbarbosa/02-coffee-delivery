import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/themes/defaultTheme'
import { GlobalStyles } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CoffeeContextProvider } from './contexts/CoffeeContext'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
