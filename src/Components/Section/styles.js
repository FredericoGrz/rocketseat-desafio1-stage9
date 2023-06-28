import styled from "styled-components"

export const Container = styled.section`
    > h2 {
      width: fit-content;
      font-size: 2rem;
      font-family: 'Roboto Slab', serif;
      color: ${({ theme }) => theme.COLORS.BG_9};
      margin-bottom: 2.5rem;
      transition: transform .3s;
      &:hover {
        transform: scale(1.1);
      }
  }
`