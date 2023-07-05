import { styled } from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem; //deveria ser 16
  height: 19.375rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  img {
    margin-top: -50px;
    width: 7.5rem;
    height: auto;
  }
`
export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`
export const Category = styled.strong`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  padding: 0.25rem 0.5rem;
  border-radius: 20px;

  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
`
export const SubtitleCard = styled.h2`
  color: ${(props) => props.theme['base-subtitle']};

  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  font-weight: 700;
`
export const LabelCard = styled.span`
  color: ${(props) => props.theme['base-label']};

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;

  margin-bottom: 2rem;
`
export const BuyContainer = styled.div`
  width: 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: baseline;
    gap: 0.2rem;
    color: ${(props) => props.theme['base-text']};
    flex: auto;
  }

  strong {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
  }
  span {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.5rem;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    border: 0;
    border-radius: 6px;
    margin-left: 0.5rem;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['purple-dark']};
  }
  button:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
