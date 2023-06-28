import { Container } from "./styles";
import Proptypes from "prop-types"

export function Button({ alt = false, icon: Icon, title, size, ...rest }) {
  return (
    <Container className={alt ? "button-alt" : ""} size={size} {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  )
}

Button.propTypes = {
  alt: Proptypes.bool,
  icon: Proptypes.func,
  title: Proptypes.string.isRequired,
  size: Proptypes.number
}