import { Minus, Plus } from 'phosphor-react'
import { ButtonContainer, CounterContainer } from './styled'
import { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(1)

  function handleCounterPlus() {
    if (counter < 9) {
      setCounter(counter + 1)
    }
  }

  function handleCounterMinus() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <CounterContainer>
      <ButtonContainer onClick={handleCounterMinus}>
        <Minus size={14} weight="bold" />
      </ButtonContainer>
      <label>{counter}</label>
      <ButtonContainer onClick={handleCounterPlus}>
        <Plus size={14} weight="bold" />
      </ButtonContainer>
    </CounterContainer>
  )
}
