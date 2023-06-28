import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;
  padding: 1.9rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.BG_5};
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: start;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.BG_4};
  }

  > input {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.BG_4};
    background-color: transparent;
    border: none;
    font-size: 1.4rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BG_4};
      font-size: 1.4rem;
    }

    &:focus {
      outline: none;
    }
  }
`