import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  display: flex;
  gap: .8rem;
  color: ${({ theme }) => theme.COLORS.BG_6};
  font-size: 1.6rem;
  > svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.COLORS.BG_6};
  }
`