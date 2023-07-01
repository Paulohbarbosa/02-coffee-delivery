import { styled } from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5.8rem 10rem;
  gap: 3.5rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
  }
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
  }
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
export const ItemsContainer = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
  }

  /* i {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 50%;
    color: white;
    background-color: blue;
  } */

  span {
    width: 16rem;
    margin-left: 0.5rem;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-family: 400;
  }
`
