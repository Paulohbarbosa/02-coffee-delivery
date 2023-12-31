import { ReactNode, createContext, useEffect, useState } from 'react'

import expressoTradicional from '../../public/coffees/expresso.png'
import americano from '../../public/coffees/americano.png'
import expressoCremoso from '../../public/coffees/expresso_cremoso.png'
import gelado from '../../public/coffees/cafe_gelado.png'
import comLeite from '../../public/coffees/cafe_com_leite.png'
import latte from '../../public/coffees/latte.png'
import capuccino from '../../public/coffees/capuccino.png'
import macchiato from '../../public/coffees/macchiato.png'
import mocaccino from '../../public/coffees/mocaccino.png'
import chocolateQuente from '../../public/coffees/chocolate_quente.png'
import cubano from '../../public/coffees/cubano.png'
import havaiano from '../../public/coffees/havaiano.png'
import arabe from '../../public/coffees/arabe.png'
import irlandes from '../../public/coffees/irlandes.png'

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
      img: americano,
      tags: [{ content: 'tradicional' }],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: '9,90',
    },
    {
      id: 3,
      img: expressoCremoso,
      tags: [{ content: 'tradicional' }],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      value: '9,90',
    },
    {
      id: 4,
      img: gelado,
      tags: [{ content: 'tradicional' }, { content: 'gelado' }],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      value: '9,90',
    },
    {
      id: 5,
      img: comLeite,
      tags: [{ content: 'tradicional' }, { content: 'com leite' }],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      value: '9,90',
    },
    {
      id: 6,
      img: latte,
      tags: [{ content: 'tradicional' }, { content: 'com leite' }],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      value: '9,90',
    },
    {
      id: 7,
      img: capuccino,
      tags: [{ content: 'tradicional' }, { content: 'com leite' }],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      value: '9,90',
    },
    {
      id: 8,
      img: macchiato,
      tags: [{ content: 'tradicional' }, { content: 'com leite' }],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      value: '9,90',
    },
    {
      id: 9,
      img: mocaccino,
      tags: [{ content: 'tradicional' }, { content: 'com leite' }],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      value: '9,90',
    },
    {
      id: 10,
      img: chocolateQuente,
      tags: [{ content: 'especial' }, { content: 'com leite' }],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      value: '9,90',
    },
    {
      id: 11,
      img: cubano,
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
      img: havaiano,
      tags: [{ content: 'especial' }],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      value: '9,90',
    },
    {
      id: 13,
      img: arabe,
      tags: [{ content: 'especial' }],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      value: '9,90',
    },
    {
      id: 14,
      img: irlandes,
      tags: [{ content: 'especial' }, { content: 'alcoólico' }],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      value: '9,90',
    },
  ]
  const [orderFinalized, setOrderFinalized] = useState<OrderFinalizedProps[]>(
    [],
  )

  const [shoppingCart, setShoppingCart] = useState<OrderCartProps[]>(() => {
    const storageValue = localStorage.getItem(
      '@ignite-coffeeDelivery:Coffee-Order-1.0.0',
    )
    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return []
    }
  })

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

  useEffect(() => {
    localStorage.setItem(
      '@ignite-coffeeDelivery:Coffee-Order-1.0.0',
      JSON.stringify(shoppingCart),
    )
  }, [shoppingCart])

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
    setShoppingCart([])
  }

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
