import {
  ButtonContainer,
  ButtonLocation,
  ButtonShoppingCart,
  HeaderContainer,
} from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingCartCoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { shoppingCart } = useContext(ShoppingCartCoffeeContext)

  function cartButtonInformation() {
    if (shoppingCart.length > 0) {
      return <p>{shoppingCart.length}</p>
    } else {
      return ''
    }
  }

  return (
    <>
      <HeaderContainer>
        <NavLink to="/" title="Inicio">
          <img
            src={logo}
            alt="Logo do site Coffee Delivery: Um copo de café com um desenho de foguete no meio"
          />
        </NavLink>
        <nav>
          <ButtonLocation>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </ButtonLocation>
          <NavLink to="/checkout" title="Carrinho">
            <ButtonContainer>
              <ButtonShoppingCart>
                <ShoppingCart size={22} weight="fill" />
              </ButtonShoppingCart>
              {cartButtonInformation()}
            </ButtonContainer>
          </NavLink>
        </nav>
      </HeaderContainer>
      <br />
    </>
  )
}
