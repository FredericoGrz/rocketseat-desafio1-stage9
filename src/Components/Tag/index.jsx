import { Container } from "./styles"
import Proptypes from "prop-types"

export function Tag({ title }) {
  return (
    <Container>
      {title}
    </Container>
  )
}

Tag.propTypes = {
  title: Proptypes.string.isRequired
}