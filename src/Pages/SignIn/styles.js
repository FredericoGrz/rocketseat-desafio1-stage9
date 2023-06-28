import styled from "styled-components"
import bgImage from "../../assets/background.png"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-areas: "content img";

  > main {
    grid-area: content;
    background-color: ${({ theme }) => theme.COLORS.BG_1};
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    justify-content: center;
    align-items: center;

    > header {
      width: 50rem;
      display: flex;
      flex-direction: column;
      align-items: start;

      h1 {
        color: ${({ theme }) => theme.COLORS.BG_6};
        font-size: 4.8rem;
        font-family: 'Roboto Slab', serif;
        font-weight: 700;

        transition: transform .3s;

        &:hover {
          transform: scale(1.2);
        }
      }

      p {
        color: ${({ theme }) => theme.COLORS.BG_11};
        font-size: 1.4rem;
        font-family: 'Roboto Slab', serif;
      }
    }

    > section {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }

    > a {
      color: ${({ theme }) => theme.COLORS.BG_6};
      font-size: 1.6rem;
    }
  }

  > #bg-image {
    grid-area: img;
    background: url(${bgImage}) no-repeat center center;
    background-size: cover;
  }
`