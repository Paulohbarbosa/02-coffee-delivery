import { ButtonLocation, ButtonShoppingCart, HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
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
            <ButtonShoppingCart>
              <ShoppingCart size={22} weight="fill" />
            </ButtonShoppingCart>
          </NavLink>
        </nav>
      </HeaderContainer>
      <br />
    </>
  )
}
