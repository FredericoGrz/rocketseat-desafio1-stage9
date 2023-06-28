import { Container, Header } from "./styles";
import { ButtonBack } from "../../Components/ButtonBack"
import { FaUser, FaLock } from "react-icons/fa"
import { MdOutlineEmail, MdOutlineCameraAlt } from "react-icons/md"
import { RoundImage } from "../../Components/RoundImage"
import { Form } from "../../Components/Form"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"

export function Profile() {
  return (
    <Container>
      <Header>
        <nav>
          <ButtonBack />
        </nav>
      </Header>
      <main>
        <div id="form-container">
          <RoundImage size={19} alt="Foto do usuario" src="https://github.com/fredericogrz.png">
            <label htmlFor="avatar">
              <MdOutlineCameraAlt />
              <input
                id="avatar"
                type="file"
              />
            </label>
          </RoundImage>
          <Form>
            <Input icon={FaUser} type="text" placeholder="Nome" />
            <Input icon={MdOutlineEmail} type="email" placeholder="Email" />
            <Input icon={FaLock} type="password" placeholder="Senha" />
            <Input icon={FaLock} type="password" placeholder="Senha novamente" />
            <Button title="Salvar" />
          </Form>
        </div>
      </main>
    </Container >
  )
}