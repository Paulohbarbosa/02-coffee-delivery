import { styled } from 'styled-components'

export const CounterContainer = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 5px; //adicionei porque não estava respeitando o distanciamento DEVO CORRIGIR FUTURAMENTE
  border: 0;
  border-radius: 6px;
  justify-content: center;
  background-color: ${(props) => props.theme['base-button']};
`

const ButtonCounter = styled.a`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme['base-button']};

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
    background-color: ${(props) => props.theme['base-hover']};
  }
`
export const ButtonCounterMinus = styled(ButtonCounter)`
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  border-radius: 6px 0px 0px 6px;
`
export const ButtonCounterPlus = styled(ButtonCounter)`
  padding: 0.5rem 0.5rem 0.5rem 0.25rem;
  border-radius: 0px 6px 6px 0px;
`

export const NumberContainer = styled.label`
  /* background-color: ${(props) => props.theme['base-button']}; */
  margin: 0;
  width: 1rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
`
