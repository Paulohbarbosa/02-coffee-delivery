import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imagePresentation from '../../assets/coffee-home.png'
import {
  AreaCardContainer,
  AreaCards,
  IconsContainer,
  IntroContainer,
  ItemsContainer,
  TitleContainer,
} from './styles'
import { Card } from '../../components/Card'
import { useContext } from 'react'
import { ShoppingCartCoffeeContext } from '../../contexts/CoffeeContext'

export function Home() {
  const { coffeeLists } = useContext(ShoppingCartCoffeeContext)

  return (
    <>
      <IntroContainer>
        <div>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
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
      <AreaCardContainer>
        <h1>Nossos cafés</h1>
        <AreaCards>
          {coffeeLists.map((coffee) => {
            return (
              <Card
                key={coffee.id}
                id={coffee.id}
                // img={`src/assets/coffees/${coffee.img}`}
                img={coffee.img}
                name={coffee.name}
                tags={coffee.tags}
                description={coffee.description}
                value={coffee.value}
              />
            )
          })}
        </AreaCards>
      </AreaCardContainer>
    </>
  )
}
