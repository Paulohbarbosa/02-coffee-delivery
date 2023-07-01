import { Minus, Plus } from 'phosphor-react'
import {
  ButtonCounterMinus,
  ButtonCounterPlus,
  CounterContainer,
  NumberContainer,
} from './styled'

export function Counter() {
  return (
    <CounterContainer>
      <ButtonCounterMinus>
        <Minus size={14} weight="bold" />
      </ButtonCounterMinus>
      <NumberContainer>01</NumberContainer>
      <ButtonCounterPlus>
        <Plus size={14} weight="bold" />
      </ButtonCounterPlus>
    </CounterContainer>
  )
}
