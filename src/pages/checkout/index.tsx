import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  ButtonPaymentSection,
  ButtonsPyment,
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
            <ButtonsPyment>
              <CreditCard size={16} />
              cartão de crédito
            </ButtonsPyment>
            <ButtonsPyment>
              <Bank size={16} />
              cartão de débito
            </ButtonsPyment>
            <ButtonsPyment>
              <Money size={16} />
              Dinheiro
            </ButtonsPyment>
          </PaymentSection>
        </SectionBody>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <ShoppingCartSection>
          <Cart />
          <hr />
          <Cart />
          <hr />
          <InformationPaymentSection>
            <p>
              <label>Total de itens</label> <span>R$ 29,70</span>
            </p>
            <p>
              <label>Entrega</label> <span>R$ 3,50</span>
            </p>
            <p>
              <strong>Total</strong> <strong>R$ 33,20</strong>
            </p>
          </InformationPaymentSection>
          <ButtonPaymentSection>Confirmar Pedido</ButtonPaymentSection>
        </ShoppingCartSection>
      </div>
    </CheckoutContainer>
  )
}
