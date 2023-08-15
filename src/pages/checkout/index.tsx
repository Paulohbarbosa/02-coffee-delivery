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
import { useContext, useEffect, useState } from 'react'
import {
  OrderFinalizedProps,
  ShoppingCartCoffeeContext,
} from '../../contexts/CoffeeContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface OrderCoffeeProps {
  CEP: string
  bairro: string
  cidade: string
  complemento: string
  numero: string
  rua: string
  uf: string
  formaPagamento: string
}

/* INFO: falta
[ ]retirar os erros, 
[ ]validar o formulário
[ ]bloquear o botão de confirmar o pedido
[ ] colocar as compras nos cooks
[ ]limpeza no código
*/

export function Checkout() {
  const { register, handleSubmit, watch, reset } = useForm()

  const { shoppingCart, coffeeLists, orderCoffeeFinalized } = useContext(
    ShoppingCartCoffeeContext,
  )

  const [totalQuantity, setTotalQuantity] = useState(0)

  const navigate = useNavigate()

  const valueEachCoffee = 9.9
  const shippingValue = 3.5

  useEffect(() => {
    const total = shoppingCart.reduce((getTotal, coffee) => {
      return getTotal + coffee.amount
    }, 0)
    setTotalQuantity(total)
  }, [shoppingCart])

  function handleOrderFinalized(data: OrderCoffeeProps) {
    const orderFinalized: OrderFinalizedProps = {
      id: String(new Date().getTime()),
      OrderCoffee: shoppingCart,
      cep: data.CEP,
      address: data.rua,
      number: data.numero,
      complement: data.complemento,
      neighborhood: data.bairro,
      city: data.cidade,
      uf: data.uf,
      paymentOrder: data.formaPagamento,
    }
    orderCoffeeFinalized(orderFinalized)
    reset()
    navigate('/success')
  }

  function totalItems() {
    const valor = totalQuantity * valueEachCoffee
    return valor.toFixed(2)
  }

  function shippingValueTotal(valorDaCompra: string) {
    const value = parseFloat(valorDaCompra) + shippingValue
    return value.toFixed(2)
  }

  function formatValue(valor: string | number) {
    return valor.toString().replace('.', ',')
  }
  return (
    <CheckoutContainer onSubmit={handleSubmit(handleOrderFinalized)}>
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
            <InputForm
              type="number"
              placeholder="CEP"
              variant="12.5rem"
              {...register('CEP')}
            />
            <InputForm
              type="text"
              placeholder="Rua"
              variant="100%"
              {...register('rua')}
            />
            <div>
              <InputForm
                type="number"
                placeholder="Número"
                maxLength={5}
                variant="6rem"
                {...register('numero')}
              />
              <div>
                <InputForm
                  type="text"
                  placeholder="Complemento"
                  variant="100%"
                  {...register('complemento')}
                />
                <p>Opcional</p>
              </div>
            </div>
            <div>
              <InputForm
                type="text"
                placeholder="Bairro"
                variant="12.5rem"
                {...register('bairro')}
              />
              <InputForm
                type="text"
                placeholder="Cidade"
                variant="100%"
                {...register('cidade')}
              />
              <InputForm
                type="text"
                placeholder="UF"
                maxLength={2}
                variant="4rem"
                list="UF-suggestions"
                {...register('uf')}
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
              <input
                type="radio"
                value="Cartão de Crédito"
                {...register('formaPagamento')}
              />
              <CreditCard size={16} />
              <span>cartão de crédito </span>
            </SelectInputPayment>
            <SelectInputPayment>
              <input
                type="radio"
                value="Cartão de Débito"
                {...register('formaPagamento')}
              />
              <Bank size={16} />
              <span>cartão de débito</span>
            </SelectInputPayment>
            <SelectInputPayment>
              <input
                type="radio"
                value="Dinheiro"
                {...register('formaPagamento')}
              />
              <Money size={16} />
              <span>Dinheiro </span>
            </SelectInputPayment>
          </PaymentSection>
        </SectionBody>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <ShoppingCartSection>
          {/* tem que pegar os dados do carrinho */}
          {shoppingCart.map((cart) => {
            // const order = coffeeLists.find((coffee) => coffee.id === cart.id) // o elemento pode retornar underfinder é por isso que o typescript está dando erro
            // console.log(order)
            return (
              <Cart
                key={cart.id}
                id={cart.id}
                // img={`src/assets/coffees/${cart.img}`} //quando resolver o problema com o order
                img={cart.img}
                name={cart.name}
                value={cart.value}
                amountValue={cart.amount}
              />
            )
          })}
          <InformationPaymentSection>
            <p>
              <label>Total de itens</label>{' '}
              <span>R$ {formatValue(totalItems())}</span>
            </p>
            <p>
              <label>Entrega</label>
              <span>R$ {formatValue(shippingValue.toFixed(2))}</span>
            </p>
            <p>
              <strong>Total</strong>{' '}
              <strong>
                R$ {formatValue(shippingValueTotal(totalItems()))}
              </strong>
            </p>
          </InformationPaymentSection>
          {/* o botão somente estará habilitado se o formulário de entrega, o pagamento e o carrinho estiveram preenchidos  */}
          <ButtonPaymentSection type="submit">
            Confirmar Pedido
          </ButtonPaymentSection>
        </ShoppingCartSection>
      </div>
    </CheckoutContainer>
  )
}
