import { ShoppingCartSimple } from 'phosphor-react'
import coffee from '../../assets/caffee.png'
import {
  BuyContainer,
  CardContainer,
  Category,
  CategoryContainer,
  LabelCard,
  SubtitleCard,
} from './styles'
import { Counter } from '../Counter'

export function Card() {
  return (
    <CardContainer>
      <img src={coffee} alt="" />
      <CategoryContainer>
        <Category>tradicional</Category>
      </CategoryContainer>
      <SubtitleCard>Expresso tradicional</SubtitleCard>
      <LabelCard>O tradicional café feito água quente e grãos moídos</LabelCard>
      <form action="">
        <BuyContainer>
          <div>
            <strong>R$</strong>
            <span>9.90</span>
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
