import { Trash } from 'phosphor-react'
import { Counter } from '../Counter'
import {
  ButtonCart,
  CartButtonContainer,
  CartContainer,
  CartInfo,
  CartInfoContainer,
  CartTotal,
} from './styled'

import imagem from '../../assets/coffees/expresso.png'

export function Cart() {
  return (
    <CartContainer>
      <CartInfoContainer>
        <img src={imagem} alt="" />
        <CartInfo>
          <h2>Expresso Tradicional</h2>
          <CartButtonContainer>
            <Counter />
            <ButtonCart>
              <Trash size={16} />
              Remover
            </ButtonCart>
          </CartButtonContainer>
        </CartInfo>
      </CartInfoContainer>
      <CartTotal>
        <span>R$ 9,90</span>
      </CartTotal>
    </CartContainer>
  )
}
