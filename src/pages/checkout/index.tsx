import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  ButtonPaymentSection,
  SelectInputPayment,
  CheckoutContainer,
  FormSection,
  InformationPaymentSection,
  InputForm,
  PaymentSection,
  SectionBody,
  SectionHeader,
  ShoppingCartSection,
} from './styles'
import { Cart } from '../../components/Cart'
import { useContext, useState } from 'react'
import { ShoppingCartCoffeeContext } from '../../contexts/CoffeeContext'
import { set } from 'react-hook-form'

interface CartProps {
  id: number
  amount: number
}

export function Checkout() {
  const { shoppingCart } = useContext(ShoppingCartCoffeeContext)

  // INFO: possível solução, criar um estado onde armazena o valor total de itens com os seus respectivos quantidades

  const [totalQuantity, setTotalQuantity] = useState(0)

  // [x] temos que setar em totalQuantity os dados que estão em shoppingCart
  function quantityOdItemsInCart() {
    if (shoppingCart.length > 0 && totalQuantity === 0) {
      const total = shoppingCart.reduce((getTotal, coffee) => {
        return getTotal + coffee.amount
      }, 0)

      setTotalQuantity(total)
    }
  }
  quantityOdItemsInCart()

  function incrementInTotalQuantity() {
    setTotalQuantity(totalQuantity + 1)
  }
  function decrementTheTotalQuantity() {
    setTotalQuantity(totalQuantity - 1)
  }

  function totalItems() {
    const valor = totalQuantity * 9.9
    return valor.toFixed(2)
  }

  function valueTotal(valorDaCompra: number) {
    const value = parseFloat(valorDaCompra) + 3.5
    return value.toFixed(2)
  }

  function convertValueToString(valor: number) {
    return valor.toString().replace('.', ',')
  }
  return (
    <CheckoutContainer>
      <div>
        <h1>Complete seu pedido</h1>
        <SectionBody>
          <SectionHeader variant={'yellow-dark'}>
            <i>
              <MapPinLine size={22} />
            </i>
            <p>
              <label>Endereço de Entrega</label>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </p>
          </SectionHeader>
          <FormSection>
            <InputForm type="number" placeholder="CEP" variant="12.5rem" />
            <InputForm type="text" placeholder="Rua" variant="100%" />
            <div>
              <InputForm
                type="number"
                placeholder="Número"
                maxLength={5}
                variant="6rem"
              />
              <div>
                <InputForm
                  type="text"
                  placeholder="Complemento"
                  variant="100%"
                />
                <p>Opcional</p>
              </div>
            </div>
            <div>
              <InputForm type="text" placeholder="Bairro" variant="12.5rem" />
              <InputForm type="text" placeholder="Cidade" variant="100%" />
              <InputForm
                type="text"
                placeholder="UF"
                maxLength={2}
                variant="4rem"
                list="UF-suggestions"
              />
              <datalist id="UF-suggestions">
                <option value="BA" />
                <option value="SP" />
                <option value="RJ" />
              </datalist>
            </div>
          </FormSection>
        </SectionBody>
        <SectionBody>
          <SectionHeader variant={'purple'}>
            <i>
              <CurrencyDollar size={22} />
            </i>
            <p>
              <label>Pagamento</label>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </p>
          </SectionHeader>
          <PaymentSection>
            <SelectInputPayment>
              <input type="radio" name="formaPagamento" />
              <label>
                <CreditCard size={16} />
                cartão de crédito
              </label>
            </SelectInputPayment>
            <SelectInputPayment>
              <input type="radio" name="formaPagamento" />
              <Bank size={16} />
              cartão de débito
            </SelectInputPayment>
            <SelectInputPayment>
              <input type="radio" name="formaPagamento" />
              <Money size={16} />
              Dinheiro
            </SelectInputPayment>
          </PaymentSection>
        </SectionBody>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <ShoppingCartSection>
          {shoppingCart.map((cart) => {
            return (
              <Cart
                key={cart.id}
                id={cart.id}
                img={cart.img}
                name={cart.name}
                value={cart.value}
                amountValue={cart.amount}
                handleDecrement={decrementTheTotalQuantity}
                handleIncrement={incrementInTotalQuantity}
              />
            )
          })}
          <InformationPaymentSection>
            <p>
              <label>Total de itens</label>{' '}
              <span>R$ {convertValueToString(totalItems())}</span>
            </p>
            <p>
              <label>Entrega</label> <span>R$ 3,50</span>
            </p>
            <p>
              <strong>Total</strong>{' '}
              <strong>
                R$ {convertValueToString(valueTotal(totalItems()))}
              </strong>
            </p>
          </InformationPaymentSection>
          <ButtonPaymentSection>Confirmar Pedido</ButtonPaymentSection>
        </ShoppingCartSection>
      </div>
    </CheckoutContainer>
  )
}
