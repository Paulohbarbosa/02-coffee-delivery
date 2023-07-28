import { ShoppingCartSimple } from 'phosphor-react'
import {
  ButtonBuy,
  BuyContainer,
  CardContainer,
  Category,
  CategoryContainer,
  CounterBuyContainer,
  LabelCard,
  SubtitleCard,
  ValueBuyContainer,
} from './styles'
import { Counter } from '../Counter'
import { createContext, useContext, useState } from 'react'
import { ShoppingCartCoffeeContext } from '../../pages/home'
interface CardProps {
  id: number
  img: string
  tags: { content: string }[]
  name: string
  description: string
  value: string
}

interface AmountTypes {
  amount: number
  handleCounterPlus: () => void
  handleCounterMinus: () => void
}
export const AmountCoffee = createContext({} as AmountTypes)

export function Card({ id, img, tags, name, description, value }: CardProps) {
  const { newOrderCoffee } = useContext(ShoppingCartCoffeeContext)

  const [amount, setAmount] = useState(1)

  function handleCounterPlus() {
    if (amount < 9) {
      setAmount(amount + 1)
    }
  }

  function handleCounterMinus() {
    if (amount > 0) {
      setAmount(amount - 1)
    }
  }

  function handleNewOrderCoffee() {
    const orderCoffee = {
      id,
      amount,
    }
    newOrderCoffee(orderCoffee)
    setAmount(0)
  }

  return (
    <CardContainer>
      <img src={img} alt="" />
      <CategoryContainer>
        {tags.map((tag) => {
          return <Category key={tag.content}>{tag.content}</Category>
        })}
      </CategoryContainer>
      <SubtitleCard>{name}</SubtitleCard>
      <LabelCard>{description}</LabelCard>
      <BuyContainer>
        <ValueBuyContainer>
          <strong>R$</strong>
          <span>{value}</span>
        </ValueBuyContainer>
        <CounterBuyContainer>
          <AmountCoffee.Provider
            value={{ amount, handleCounterPlus, handleCounterMinus }}
          >
            <Counter />
          </AmountCoffee.Provider>
          <ButtonBuy name="carrinho" onClick={handleNewOrderCoffee}>
            <ShoppingCartSimple size={22} weight="fill" />
          </ButtonBuy>
        </CounterBuyContainer>
      </BuyContainer>
    </CardContainer>
  )
}
