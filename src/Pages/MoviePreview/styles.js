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
    gap: 2.5rem;

    .col-2 {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .flex {
      display: flex;
      gap: .8rem;
      align-items: center;
    }

    #tags {
      display: flex;
      gap: .8rem;
      align-items: center;
    }

    h2 {
      font-size: 36px;
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.BG_3};
    }
    
    .flex p {
      color: ${({ theme }) => theme.COLORS.BG_3};
      text-align: justify;
      font-size: 1.6rem;
    }

    .flex svg {
      width: 1.5rem;
      height: 1.6rem;
      color: ${({ theme }) => theme.COLORS.BG_6};
    }

    #description {
      color: ${({ theme }) => theme.COLORS.BG_3};
      text-align: justify;
      font-size: 1.6rem;
      font-family: 'Roboto Slab', serif;
    }
  }

  
`