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
import { useContext, useState } from 'react'
import { ShoppingCartCoffeeContext } from '../../contexts/CoffeeContext'
import coffeeAmericano from '../../assets/coffees/americano.png'

interface CardProps {
  id: number
  img: string
  tags: { content: string }[]
  name: string
  description: string
  value: string
}

export function Card({ id, img, tags, name, description, value }: CardProps) {
  const { newOrderCoffee, shoppingCart } = useContext(ShoppingCartCoffeeContext)

  const [amount, setAmount] = useState(1)

  function plus() {
    if (amount < 9) {
      setAmount(amount + 1)
    }
  }
  function minus() {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  function handleNewOrderCoffee() {
    const orderCoffee = {
      id,
      amount,
    }
    newOrderCoffee(orderCoffee)
    setAmount(1)
  }

  function isButtonBuyDisabled() {
    const coffee = shoppingCart.find((coffeeAmount) => coffeeAmount.id === id)
    const AmountCoffee = coffee?.amount === undefined ? 0 : coffee.amount
    if (AmountCoffee + amount <= 9) {
      return false
    } else {
      return true
    }
  }

  // console.log(img)

  return (
    <CardContainer>
      {/* <img src={`src/assets/coffees/${img}`} alt="" /> */}
      <img src={img} alt="coffee" />
      {/* <img src={'../../assets/coffees/americano.png'} alt="coffee" /> */}
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
          <Counter
            value={amount}
            handleCounterPlus={plus}
            handleCounterMinus={minus}
          />
          <ButtonBuy
            name="carrinho"
            onClick={handleNewOrderCoffee}
            disabled={isButtonBuyDisabled()}
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </ButtonBuy>
        </CounterBuyContainer>
      </BuyContainer>
    </CardContainer>
  )
}
