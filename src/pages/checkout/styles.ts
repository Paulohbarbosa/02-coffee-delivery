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
  variant: String
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
  }
`
interface InputProps {
  variant: '12.5rem' | '100%' | '3.75rem'
}
export const InputForm = styled.input<InputProps>`
  width: ${(props) => props.variant};
  padding: 0.75rem;
  align-items: center;

  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
`

export const ShoppingCartSection = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  border-radius: 0.375rem 2.75rem;
  background-color: ${(props) => props.theme['base-card']};
`
