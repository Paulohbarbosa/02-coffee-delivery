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
  SelectForm,
} from './styles'
import { Cart } from '../../components/Cart'
import { useContext, useEffect, useState } from 'react'
import {
  OrderFinalizedProps,
  ShoppingCartCoffeeContext,
} from '../../contexts/CoffeeContext'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

/* INFO: falta
[x]retirar os erros, 
[x]validar o formulário
[x]bloquear o botão de confirmar o pedido
[x]corrigir a renderização do carrinho usando map no carrinho de compras e o finder na lista de café
[x] impedir que seja adicionado mais que 9 unidades do mesmo café no carrinho
[ ]limpeza no código
[x]impossibilitar o selecionamento dos elementos da tela
[x] máscara no campo de CEP
*/

const addressAndPaymentSchema = zod.object({
  cep: zod.string().length(10, 'Informe um CEP válido'),
  bairro: zod.string().min(1, 'Informe um Bairro'),
  cidade: zod.string().min(1, 'Informe a Cidade'),
  complemento: zod.string().optional(),
  numero: zod.string().min(1, 'Informe o Número da residencia'),
  rua: zod.string().min(1, 'Informe a endereço da Rua'),
  uf: zod.string().length(2, 'Selecione o estado da residencia'),
  formaPagamento: zod.string(),
})

type AddressAndPaymentOrderCoffeeDAta = zod.infer<
  typeof addressAndPaymentSchema
>

export function Checkout() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<AddressAndPaymentOrderCoffeeDAta>({
    resolver: zodResolver(addressAndPaymentSchema),
  })

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

  function handleOrderFinalized(data: AddressAndPaymentOrderCoffeeDAta) {
    const orderFinalized: OrderFinalizedProps = {
      id: String(new Date().getTime()),
      OrderCoffee: shoppingCart,
      cep: data.cep,
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

  function isSubmitDisabled() {
    if (
      watch('formaPagamento') &&
      shoppingCart.length > 0 &&
      watch('rua') &&
      watch('numero') &&
      watch('bairro')
    ) {
      return false
    } else {
      return true
    }
  }

  function handleMask(e: React.FormEvent<HTMLInputElement>) {
    let value = e.currentTarget.value
    value = value.replace(/\D/g, '') // limpamos a digitação
    value = value.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1.$2-$3') // adiciona a pontuação
    e.currentTarget.value = value
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
              type="text"
              placeholder="CEP"
              variant="12.5rem"
              maxLength={8}
              onKeyUp={handleMask}
              {...register('cep')}
            />
            <ErrorMessage errors={errors} name="cep" />
            <InputForm
              type="text"
              placeholder="Rua"
              variant="100%"
              {...register('rua')}
            />
            <ErrorMessage errors={errors} name="rua" />
            <div>
              <InputForm
                type="text"
                placeholder="Número"
                maxLength={5}
                variant="6rem"
                {...register('numero')}
              />
              <ErrorMessage errors={errors} name="numero" />
              <div>
                <InputForm
                  type="text"
                  placeholder="Complemento"
                  variant="100%"
                  {...register('complemento')}
                />
                <ErrorMessage errors={errors} name="complemento" />
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
              <ErrorMessage errors={errors} name="bairro" />
              <InputForm
                type="text"
                placeholder="Cidade"
                variant="100%"
                {...register('cidade')}
              />
              <ErrorMessage errors={errors} name="cidade" />
              <SelectForm variant="12.5rem" {...register('uf')}>
                <option defaultChecked>UF</option>
                <option value={'AC'}>AC</option>
                <option value={'BA'}>BA</option>
                <option value={'MG'}>MG</option>
                <option value={'SP'}>SP</option>
              </SelectForm>
              <ErrorMessage errors={errors} name="uf" />
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
          {shoppingCart.map((cart) => {
            const order = coffeeLists.find((coffee) => {
              return coffee.id === cart.id
            })
            return (
              <Cart
                key={cart.id}
                id={cart.id}
                img={`src/assets/coffees/${order?.img}`}
                name={order?.name}
                value={order?.value}
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
          <ButtonPaymentSection type="submit" disabled={isSubmitDisabled()}>
            Confirmar Pedido
          </ButtonPaymentSection>
        </ShoppingCartSection>
      </div>
    </CheckoutContainer>
  )
}
