import { styled, css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariantsColor = {
  primary: 'blue',
  secondary: 'yellow',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${(props) => {
    return css`
      background-color: ${buttonVariantsColor[props.variant]};
    `
  }}
`