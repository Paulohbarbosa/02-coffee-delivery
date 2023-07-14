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

interface CardProps {
  img: string
  tags: [{ content: string }]
  name: string
  description: string
  value: string
}

export function Card({ img, tags, name, description, value }: CardProps) {
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
      {/* <form action=""> */}
      <BuyContainer>
        <ValueBuyContainer>
          <strong>R$</strong>
          <span>{value}</span>
        </ValueBuyContainer>
        <CounterBuyContainer>
          <Counter />
          <ButtonBuy name="carrinho">
            <ShoppingCartSimple size={22} weight="fill" />
          </ButtonBuy>
        </CounterBuyContainer>
      </BuyContainer>
      {/* </form> */}
    </CardContainer>
  )
}
