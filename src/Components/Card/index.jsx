import { Container } from "./styles";
import Proptypes from "prop-types"

export function Card({ children, ...rest }) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}

Card.propTypes = {
  children: Proptypes.node
}