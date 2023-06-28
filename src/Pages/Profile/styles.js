import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 20% 80%;
  grid-template-areas: 
  "header"
  "content";
  background-color: ${({ theme }) => theme.COLORS.BG_1};
  > main  {
    grid-area: content;

    #form-container {
      width: 60rem;
      margin: -10rem auto;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 6.5rem;
      > div {
        position: relative;

        label {
          display: flex;
          position: absolute;
          right: 0;
          bottom: 0;

          padding: 1.4rem;
          background-color: ${({ theme }) => theme.COLORS.BG_6};
          border: none;
          border-radius: 50%;
          cursor: pointer;

          > input {
            display: none;
          }

          > svg {
            font-size: 3rem;
            color: ${({ theme }) => theme.COLORS.BG_8};
          }
        }
      }
    }
  }
`

export const Header = styled.header`
  grid-area: header;
  background-color: rgba(255, 133, 155, 0.05);
  padding: 6.4rem 14.4rem;

  > nav {
    height: 100%;
    display: flex;
    a {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: .8rem;
      color: ${({ theme }) => theme.COLORS.BG_6};
      font-size: 1.6rem;
      > svg {
        color: ${({ theme }) => theme.COLORS.BG_6};
        font-size: 2rem;
      }
    }
  }
  
`