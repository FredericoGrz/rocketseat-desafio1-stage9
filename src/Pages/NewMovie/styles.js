import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10% 90%;
  grid-template-areas: 
  "header"
  "content";
  background-color: ${({ theme }) => theme.COLORS.BG_1};

  > main {
    grid-area: content;
    padding: 4rem 12rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
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

    .col-2 {
        display: flex;
        gap: 4rem;
        flex-wrap: nowrap;
    }

    > header {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;

      h1 {
        font-size: 3.6rem;
        font-family: 'Roboto Slab', serif;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.BG_3};
      }
    }

    > form  {
      width: 100%;
      gap: 4rem;
      
    }
  }
`

export const GenreList = styled.div`
  width: 100%;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BG_7};
  border-radius: .8rem;
  display: flex;
  gap: 2.4rem;
  flex-wrap: wrap;
`

export const GenreItem = styled.div`
  padding: 1.6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BG_5};
  color: #FFF;
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  &.new-genre {
    background-color: transparent;
    border: .1rem dashed ${({ theme }) => theme.COLORS.BG_4};
  }
  
  > input {
    background-color: transparent;
    border: none;
    width: 10rem;
    color: ${({ theme }) => theme.COLORS.BG_4};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BG_4};
    }
  }

  > button {
    background: transparent;
    border: none;
    display: flex;
    transition: transform .3s;

    &:hover {
      transform: scale(1.2);
    }

    svg {
      color: ${({ theme }) => theme.COLORS.BG_6};
      font-size: 2.4rem;
    }
  }

`