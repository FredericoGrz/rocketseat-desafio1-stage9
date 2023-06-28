import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem 1.6rem;
  border-radius: .8rem;
  background: ${({ theme }) => theme.COLORS.BG_8};
  text-align: center;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.COLORS.BG_10};
  cursor: pointer;
  transition: transform .3s;

  &:hover {
    transform: scale(1.1);
  }
`