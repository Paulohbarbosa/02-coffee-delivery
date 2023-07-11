import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react'
import {
  IconsContainer,
  ImgContainer,
  SuccessContainer,
  InformationItens,
  ContainerDeliveryInformation,
  IntensContainer,
  BodySuccess,
  HeaderSuccess,
} from './styles'
import imageSuccess from '../../assets/Illustration-success.svg'

export function Success() {
  return (
    <SuccessContainer>
      <HeaderSuccess>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </HeaderSuccess>
      <BodySuccess>
        <ContainerDeliveryInformation>
          <IntensContainer>
            <IconsContainer variant={'purple'}>
              <MapPin size={16} weight="fill" />
            </IconsContainer>
            <InformationItens>
              <label>Entrega em</label>
              <span>
                Rua João Daniel Martinelli, 102, Farrapos - Porto Alegre, RS
              </span>
            </InformationItens>
          </IntensContainer>
          <IntensContainer>
            <IconsContainer variant={'yellow'}>
              <Timer size={16} weight="fill" />
            </IconsContainer>
            <InformationItens>
              <label>Previsão de entrega</label>
              <span>20 min - 30 min</span>
            </InformationItens>
          </IntensContainer>
          <IntensContainer>
            <IconsContainer variant={'yellow-dark'}>
              <CurrencyDollarSimple size={16} weight="fill" />
            </IconsContainer>
            <InformationItens>
              <label>Pagamento na entrega</label>
              <span>Cartão de Crédito</span>
            </InformationItens>
          </IntensContainer>
        </ContainerDeliveryInformation>
        <ImgContainer>
          <img src={imageSuccess} alt="" />
        </ImgContainer>
      </BodySuccess>
    </SuccessContainer>
  )
}
