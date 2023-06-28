import styled from "styled-components"

export const Container = styled.textarea`
  padding: 2rem;
  color: ${({ theme }) => theme.COLORS.BG_4};
  background-color: ${({ theme }) => theme.COLORS.BG_5};
  width: 100%;
  height: 25rem;
  resize: none;
  border-radius: 1rem;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.BG_4};
  }
`