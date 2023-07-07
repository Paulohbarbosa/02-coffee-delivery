import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styled'
interface CounterProps {
  valueCounter: number
}

export function Counter({ valueCounter }: CounterProps) {
  return (
    <CounterContainer>
      <Minus size={14} weight="bold" />
      <label>{valueCounter}</label>
      <Plus size={14} weight="bold" />
    </CounterContainer>
  )
}
