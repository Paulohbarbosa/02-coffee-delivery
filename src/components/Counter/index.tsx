import { Minus, Plus } from 'phosphor-react'
import { ButtonContainer, CounterContainer } from './styled'
import { useContext } from 'react'
import { AmountCoffee } from '../Card'

export function Counter() {
  const { handleCounterMinus, handleCounterPlus, amount } =
    useContext(AmountCoffee)

  return (
    <CounterContainer>
      <ButtonContainer onClick={handleCounterMinus}>
        <Minus size={14} weight="bold" />
      </ButtonContainer>
      <label>{amount}</label>
      <ButtonContainer onClick={handleCounterPlus}>
        <Plus size={14} weight="bold" />
      </ButtonContainer>
    </CounterContainer>
  )
}
