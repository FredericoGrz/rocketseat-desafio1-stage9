import { Container } from "./styles";
import Proptypes from "prop-types"

export function RoundImage({ size = 5, src, alt, children }) {
  return (
    <Container $size={size}>
      <img src={src} alt={alt} />
      {children}
    </Container>
  )
}

RoundImage.propTypes = {
  size: Proptypes.number,
  src: Proptypes.string,
  alt: Proptypes.string,
  children: Proptypes.node
}