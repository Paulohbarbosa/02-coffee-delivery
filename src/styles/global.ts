import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
    }


    body{
        background: ${(props) => props.theme.background};
    }
`
