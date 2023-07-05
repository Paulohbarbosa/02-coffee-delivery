import { ShoppingCartSimple } from 'phosphor-react'
import coffee from '../../assets/coffees/expresso.png'
import {
  BuyContainer,
  CardContainer,
  Category,
  CategoryContainer,
  LabelCard,
  SubtitleCard,
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
      <form action="">
        <BuyContainer>
          <div>
            <strong>R$</strong>
            <span>{value}</span>
          </div>
          <Counter />
          <button name="carrinho" type="submit">
            <ShoppingCartSimple size={16} weight="fill" />
          </button>
        </BuyContainer>
      </form>
    </CardContainer>
  )
}
