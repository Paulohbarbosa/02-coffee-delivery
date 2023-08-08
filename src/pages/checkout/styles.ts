import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;
  padding: 5rem 10rem;
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;

  h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.94rem;
  }
`
interface IconsProps {
  variant: string
}
export const SectionHeader = styled.div<IconsProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;

  i {
    color: ${(props) => props.theme[`${props.variant}`]};
  }
  p {
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 1rem;
    font-family: 'Roboto';
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
  span {
    font-size: 0.875rem;
    font-family: 'Roboto';
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`
export const SectionBody = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;

  border-radius: 0.375rem;
  background-color: ${(props) => props.theme['base-card']};
  margin-bottom: 0.75rem;

  z-index: -1;
`
export const FormSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  font-size: 0.875rem;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${(props) => props.theme['base-label']};

  div {
    width: 100%;
    display: flex;
    gap: 0.75rem;

    position: relative;

    p {
      display: flex;
      width: 10px;
      height: 10px;
      display: block;
      position: absolute;
      top: 30%;
      left: 80%;

      color: ${(props) => props.theme['base-label']};
      font-family: 'Roboto';
      font-size: 0.75rem;
      font-style: italic;
      font-weight: 400;
    }
  }
`
interface InputProps {
  variant: '12.5rem' | '100%' | '4rem' | '6rem'
}
export const InputForm = styled.input<InputProps>`
  width: ${(props) => props.variant};
  padding: 0.75rem;
  align-items: center;

  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};

  font-family: 'Roboto';
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};

  &::-webkit-input-placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`
const Select = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  border: 1px solid transparent; //para não dá o pulinho quando selecionado
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme['base-button']};

  text-transform: uppercase;
  font-family: 'Roboto';
  font-size: 0.75rem;
  font-weight: 400;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &:focus {
    box-shadow: none;
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
export const SelectInputPayment = styled(Select)`
  padding: 1rem;
`

export const PaymentSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const ShoppingCartSection = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  gap: 1.5rem;

  border-radius: 0.375rem 2.75rem;
  background-color: ${(props) => props.theme['base-card']};

  hr {
    border: 1px solid ${(props) => props.theme['base-button']};
  }
`
export const InformationPaymentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p {
    display: flex;
    justify-content: space-between;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;

    label {
      font-size: 0.875rem;
    }
    span {
      font-size: 1rem;
    }

    strong {
      font-size: 1.25rem;
    }
  }
`
export const ButtonPaymentSection = styled.button`
  display: flex;
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.375rem;
  border: 0;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};

  font-family: 'Roboto';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
