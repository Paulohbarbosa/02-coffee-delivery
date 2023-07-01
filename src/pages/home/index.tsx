import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imagePresentation from '../../assets/coffee-home.png'
import {
  IconsContainer,
  IntroContainer,
  ItemsContainer,
  TitleContainer,
} from './styles'

export function Home() {
  return (
    <IntroContainer>
      <div>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </TitleContainer>
        <ItemsContainer>
          <div>
            <IconsContainer variant={'yellow-dark'}>
              <ShoppingCart size={16} weight="fill" />
            </IconsContainer>
            <span>Compra simples e segura</span>
          </div>
          <div>
            <IconsContainer variant={'base-text'}>
              <Package size={16} weight="fill" />
            </IconsContainer>
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <IconsContainer variant={'yellow'}>
              <Timer size={22} weight="fill" />
            </IconsContainer>
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <IconsContainer variant={'purple'}>
              <Coffee size={22} weight="fill" />
            </IconsContainer>
            <span>O café chega fresquinho até você</span>
          </div>
        </ItemsContainer>
      </div>
      <div>
        <img src={imagePresentation} alt="" />
      </div>
    </IntroContainer>
  )
}
