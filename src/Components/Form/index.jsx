import { Container } from "./styles";
import Proptypes from "prop-types"

export function Form({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

Form.propTypes = {
  children: Proptypes.node
}