import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BG_1};
  display: grid;
  grid-template-rows: 10% 90%;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 5rem 12.3rem;

    > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      h1 {
        color: #FFF;
        font-size: 3.2rem;
        font-family: 'Roboto Slab', serif;
      }

    >  a {
      padding: 1.5rem 3.2rem;
      display: flex;
      gap: .8rem;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 8px;
      background: ${({ theme }) => theme.COLORS.BG_6};
      transition: transform .3s;

      color: ${({ theme }) => theme.COLORS.BG_1};
      font-size: 1.6rem;

      > svg {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.BG_1};
      }

        &:hover {
          transform: scale(1.2);
        }
      }

    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;

      overflow-y: auto;

      &::-webkit-scrollbar {
        width: .8rem; /* Largura da barra de rolagem */
      }

      &::-webkit-scrollbar-track {
        background: transparent; /* Cor do fundo da barra de rolagem */
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.BG_6};
        border-radius: .8rem;
      }

    > div {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      >  div:nth-child(1) {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        a {
          width: fit-content;
          color: ${({ theme }) => theme.COLORS.BG_3};
          font-size: 2.4rem;
          font-family: 'Roboto Slab', serif;
          font-weight: 700;
          transition: transform .3s;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      > p {
        overflow: hidden;
        color: ${({ theme }) => theme.COLORS.BG_9};
        text-overflow: ellipsis;
        /* white-space: nowrap; */
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
      }

      > div:nth-child(3) {
        display: flex;
        gap: .8rem;
      }

    }
    }
  }
`