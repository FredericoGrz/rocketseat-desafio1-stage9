import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { RoundImage } from "../RoundImage";
import { Link } from "react-router-dom";
import Proptypes from "prop-types"

export function Header({ noInput = false }) {
  return (
    <Container>
      <div className="logo">RocketMovies</div>

      {!noInput && <Input placeholder="Pesquisar pelo título" />}
      <Profile>
        <div>
          <Link to="/profile">Frederico Graziani</Link>
          <button>Sair</button>
        </div>
        <RoundImage size={6.4} src="https://github.com/fredericogrz.png" alt="Foto do usuario" />
      </Profile>
    </Container>
  )
}

Header.propTypes = {
  noInput: Proptypes.bool
}