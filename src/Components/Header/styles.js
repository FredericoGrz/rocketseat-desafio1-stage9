import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;
  border-bottom: .1rem solid ${({ theme }) => theme.COLORS.BG_2};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.4rem;
  padding: 0 12.3rem;

  .logo {
    color: #FF859B;
    font-size: 2.4rem;
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    transition: transform 0.3s;
    cursor: default;

    &:hover {
      transform: scale(1.1);
    }
  }
  
`

export const Profile = styled.div`
  display: flex;
  gap: .9rem;
  align-items: center;
  min-width: 20rem;

  > div {
    display: flex;
    flex-direction: column;

    
    a:nth-child(1){
      color: ${({ theme }) => theme.COLORS.BG_3};
      font-size: 1.4rem;
      font-family: 'Roboto Slab', serif;
      font-weight: 700;
    }
  
    button {
      color: ${({ theme }) => theme.COLORS.BG_4};
      font-size: 1.4rem;
      margin-left: auto;
      background-color: transparent;
      border: none;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.1);
        font-weight: bold;
      }
    }
  }

  img {
    border: .1rem solid ${({ theme }) => theme.COLORS.BG_2};
  }
`