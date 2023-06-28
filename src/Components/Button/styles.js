import styled from "styled-components"

export const Container = styled.button`
  width: ${({ size }) => (size ? `${size}rem` : '100%')};
  padding: 1.5rem 3.2rem;
  display: flex;
  gap: .8rem;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.BG_6};

  color: ${({ theme }) => theme.COLORS.BG_1};
  font-size: 1.6rem;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.BG_1};
  }

  &.button-alt {
    background-color: ${({ theme }) => theme.COLORS.BG_7}; 
    color: ${({ theme }) => theme.COLORS.BG_6};

    > svg {
      color: ${({ theme }) => theme.COLORS.BG_6};
    }
  }

  &:hover {
  filter: brightness(1.1);
}
`