import { Container } from "./styles";
import Proptypes from "prop-types"

export function Section({ title, children, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}

Section.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.node
}

