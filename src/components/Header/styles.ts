import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 10rem;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.background};

  nav {
    display: flex;
    gap: 0.5rem;
  }
`

export const ButtonLocation = styled.button`
  /* width: 150px;
  height: 38px; */

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  gap: 0.25rem;

  font-family: 'Roboto' sans-serif;
  font-size: 0.875rem;
  line-height: 130%;

  cursor: pointer;

  border: 0;
  border-radius: 6px;

  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};
`
export const ButtonShoppingCart = styled.button`
  width: 38px;
  height: 38px;

  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: 0;
  border-radius: 6px;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  :hover {
    color: ${(props) => props.theme.yellow};
  }
  &::before {
    content: '3';
    background-color: ${(props) => props.theme['yellow-dark']};

    font-size: 0.75rem;
    font-family: 'Roboto';
    font-weight: 700;
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;

    position: absolute;

    top: 26px;
    right: 152px;

    border-radius: 50%;
  }
`
