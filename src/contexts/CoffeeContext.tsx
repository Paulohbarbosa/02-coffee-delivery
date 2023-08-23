import { ReactNode, createContext, useEffect, useState } from 'react'
import expressoTradicional from '../../public/coffees/expresso.png'
// import americano from '../assets/coffees/americano.png'

export interface OrderCartProps {
  id: number
  amount: number
}
interface CoffeeListsProps {
  id: number
  img: string
  tags: { content: string }[]
  name: string
  description: string
  value: string
}
export interface OrderFinalizedProps {
  id: string
  OrderCoffee: OrderCartProps[]
  cep: string
  address: string
  number: string
  complement: string | undefined
  neighborhood: string
  city: string
  uf: string
  paymentOrder: string
}
interface ShoppingCartTypes {
  newOrderCoffee: (orderCoffee: OrderCartProps) => void
  changeOrderAmount: (orderCoffee: OrderCartProps) => void
  deleteOrderCoffee: (id: number) => void
  orderCoffeeFinalized: (purchase: OrderFinalizedProps) => void
  coffeeLists: CoffeeListsProps[]
  shoppingCart: OrderCartProps[]
  orderFinalized: OrderFinalizedProps[]
}

export const ShoppingCartCoffeeContext = createContext({} as ShoppingCartTypes)

interface CoffeeContextProviderProps {
  children: ReactNode
}

// INFO: Aqui teremos o CONTEXTO, o ESTADO DO CARRINHO as funções de ADICIONAR COMPRAS NO CARRINHO, IMPEDIR que a mesmo compra seja repetida

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const coffeeLists = [
    {
      id: 1,
      img: expressoTradicional,
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
  const [orderFinalized, setOrderFinalized] = useState<OrderFinalizedProps[]>(
    [],
  )

  const [shoppingCart, setShoppingCart] = useState<OrderCartProps[]>([])

  function changeOrderAmount(changedOrder: OrderCartProps) {
    setShoppingCart((state) =>
      state.map((order) => {
        if (order.id === changedOrder.id) {
          return { ...order, amount: order.amount + changedOrder.amount }
        } else {
          return order
        }
      }),
    )
  }

  function deleteOrderCoffee(id: number) {
    const newList = shoppingCart.filter((order) => order.id !== id)
    setShoppingCart(newList)
  }

  function newOrderCoffee(newOrder: OrderCartProps) {
    const isCoffeeOrderInShoppingCart = shoppingCart.find(
      (coffee) => coffee.id === newOrder.id,
    )
    if (isCoffeeOrderInShoppingCart) {
      const newOrderCoffee: OrderCartProps = {
        id: newOrder.id,
        amount: isCoffeeOrderInShoppingCart.amount + newOrder.amount,
      }
      const isNewListShoppingCart = shoppingCart.filter(
        (coffee) => coffee.id !== newOrder.id,
      )

      setShoppingCart(isNewListShoppingCart.concat(newOrderCoffee))
    } else {
      setShoppingCart((state) => [...state, newOrder])
    }
  }

  function orderCoffeeFinalized(purchase: OrderFinalizedProps) {
    setOrderFinalized((state) => [...state, purchase])
  }

  useEffect(() => {
    setShoppingCart([])
  }, [orderFinalized])

  return (
    <ShoppingCartCoffeeContext.Provider
      value={{
        newOrderCoffee,
        changeOrderAmount,
        coffeeLists,
        shoppingCart,
        deleteOrderCoffee,
        orderCoffeeFinalized,
        orderFinalized,
      }}
    >
      {children}
    </ShoppingCartCoffeeContext.Provider>
  )
}
