import { styled } from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 2.5rem;
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`
export const HeaderSuccess = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ImgContainer = styled.div`
  width: 30.75rem;
  height: 18.3125rem;
`
export const BodySuccess = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6.37rem;
`
export const ContainerDeliveryInformation = styled.div`
  display: flex;
  width: 32.875rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  position: relative;

  --border-radiusA: 0.375rem;
  --border-radiusB: 2.25rem;

  --border-width: 0.0625rem;

  background: linear-gradient(
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );

  border-radius: var(--border-radiusA) var(--border-radiusB);

  z-index: 1;

  &::before {
    content: '';
    display: block;

    height: calc(100% - calc(var(--border-width) * 2));
    width: calc(100% - calc(var(--border-width) * 2));

    background: ${(props) => props.theme.background};
    position: absolute;

    top: 1px;
    left: 1px;

    border-radius: var(--border-radiusA) var(--border-radiusB);
    z-index: -1;
  }
`
export const IntensContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
`

interface IconsProps {
  variant: String
}
export const IconsContainer = styled.i<IconsProps>`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.theme[`${props.variant}`]};
`

export const InformationItens = styled.div`
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 400;

  span {
    font-weight: 700;
  }
`
