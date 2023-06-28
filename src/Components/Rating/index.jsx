import { Container } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import Proptypes from "prop-types"

export function Rating({ stars = 1, size = 0 }) {
  return (
    <Container $size={size}>
      <AiFillStar />
      {stars >= 2 ? <AiFillStar /> : <AiOutlineStar />}
      {stars >= 3 ? <AiFillStar /> : <AiOutlineStar />}
      {stars >= 4 ? <AiFillStar /> : <AiOutlineStar />}
      {stars === 5 ? <AiFillStar /> : <AiOutlineStar />}
    </Container>
  )
}

Rating.propTypes = {
  stars: Proptypes.number.isRequired,
  size: Proptypes.number
}