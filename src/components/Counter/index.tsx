import { Minus, Plus } from 'phosphor-react'
import { ButtonContainer, CounterContainer } from './styled'
interface AmountPops {
  value: number
  handleCounterPlus: () => void
  handleCounterMinus: () => void
}

export function Counter({
  value,
  handleCounterMinus,
  handleCounterPlus,
}: AmountPops) {
  return (
    <CounterContainer>
      <ButtonContainer onClick={handleCounterMinus}>
        <Minus size={14} weight="bold" />
      </ButtonContainer>
      <label>{value}</label>
      <ButtonContainer onClick={handleCounterPlus}>
        <Plus size={14} weight="bold" />
      </ButtonContainer>
    </CounterContainer>
  )
}
