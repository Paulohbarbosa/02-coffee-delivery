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

export function Home() {
  const coffeeLists = [
    {
      id: 1,
      img: 'expresso.png',
      tags: [{ content: 'tradicional' }],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      value: '9,90',
    },
    {
      id: 2,
      img: 'americano.png',
      tags: [{ content: 'tradicional' }],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: '9,90',
    },
    {
      id: 3,
      img: 'expresso_cremoso.png',
      tags: [{ content: 'tradicional' }],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      value: '9,90',
    },
    {
      id: 4,
      img: 'cafe_gelado.png',
      tags: [{ content: 'tradicional' }, { content: 'gelado' }],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      value: '9,90',
    },
    {
      id: 5,
      img: 'cafe_com_leite.png',
      tags: [{ content: 'tradicional' }, { content: 'com leite' }],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      value: '9,90',
    },
    {
      id: 6,
      img: 'latte.png',
      tags: [{ content: 'tradicional' }, { content: 'com leite' }],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      value: '9,90',
    },
    {
      id: 7,
      img: 'capuccino.png',
      tags: [{ content: 'tradicional' }, { content: 'com leite' }],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      value: '9,90',
    },
    {
      id: 8,
      img: 'macchiato.png',
      tags: [{ content: 'tradicional' }, { content: 'com leite' }],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      value: '9,90',
    },
    {
      id: 9,
      img: 'mocaccino.png',
      tags: [{ content: 'tradicional' }, { content: 'com leite' }],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      value: '9,90',
    },
    {
      id: 10,
      img: 'chocolate_quente.png',
      tags: [{ content: 'especial' }, { content: 'com leite' }],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      value: '9,90',
    },
    {
      id: 11,
      img: 'cubano.png',
      tags: [
        { content: 'especial' },
        { content: 'alcoólico' },
        { content: 'gelado' },
      ],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      value: '9,90',
    },
    {
      id: 12,
      img: 'havaiano.png',
      tags: [{ content: 'especial' }],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      value: '9,90',
    },
    {
      id: 13,
      img: 'arabe.png',
      tags: [{ content: 'especial' }],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      value: '9,90',
    },
    {
      id: 14,
      img: 'irlandes.png',
      tags: [{ content: 'especial' }, { content: 'alcoólico' }],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      value: '9,90',
    },
  ]
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
                img={`src/assets/coffees/${coffee.img}`}
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
