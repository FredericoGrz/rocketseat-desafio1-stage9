import { Container } from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import Proptypes from "prop-types"

export function ButtonBack({ src = false, title = "Voltar" }) {
  return (
    <Container to={src || "/"}>
      <FaArrowLeft />
      {title}
    </Container>
  )
}

ButtonBack.propTypes = {
  src: Proptypes.string,
  title: Proptypes.string
}