import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: .6rem;

  > svg {
    font-size: ${({ $size }) => ($size ? `${$size}rem` : "1.2rem")};
    color: ${({ theme }) => theme.COLORS.BG_PINK};

    transition: transform .3s;

    &:hover {
      transform: scale(1.2)
    }
  }
`