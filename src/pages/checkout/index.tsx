import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { Counter } from '../../components/Counter'
import {
  CheckoutContainer,
  FormSection,
  InputForm,
  SectionBody,
  SectionHeader,
  ShoppingCartSection,
} from './styles'

export function Checkout() {
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
            <InputForm type="text" placeholder="CEP" variant="12.5rem" />
            <InputForm type="text" placeholder="Rua" variant="100%" />
            <div>
              <InputForm type="text" placeholder="Número" variant="12.5rem" />
              <InputForm type="text" placeholder="Complemento" variant="100%" />
            </div>
            <div>
              <InputForm type="text" placeholder="Bairro" variant="12.5rem" />
              <InputForm type="text" placeholder="Cidade" variant="100%" />
              <InputForm type="text" placeholder="UF" variant="3.75rem" />
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
          <div>
            <button>
              <i>
                <CreditCard size={22} />
              </i>
              cartão de crédito
            </button>
            <button>
              <i>
                <Bank size={22} />
              </i>
              cartão de débito
            </button>
            <button>
              <i>
                <Money size={22} />
              </i>
              Dinheiro
            </button>
          </div>
        </SectionBody>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <ShoppingCartSection>
          <div>
            <img />
            <div>
              <p>Expresso Tradicional</p>
              <Counter />
              <button>
                <i>
                  <Trash size={22} />
                </i>
                Remover
              </button>
            </div>
          </div>
          <p>
            <span>Total de itens</span> <strong>R$ 29,70</strong>
          </p>
          <p>
            <span>Entrega</span> <strong>R$ 3,50</strong>
          </p>
          <p>
            <span>Total</span> <strong>R$ 33,20</strong>
          </p>
          <button>Confirmar Pedido</button>
        </ShoppingCartSection>
      </div>
    </CheckoutContainer>
  )
}
