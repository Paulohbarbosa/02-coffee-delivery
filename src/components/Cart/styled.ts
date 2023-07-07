import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  width: 23rem;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  align-items: flex-start;

  img {
    width: 4rem;
    height: auto;
  }

  h2 {
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: 400;
  }
`
export const ButtonCart = styled.button`
  width: 6rem;
  padding: 0rem 0.5rem;
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
export const CartInfoContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`
export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const CartButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const CartTotal = styled.div`
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 700;
`
