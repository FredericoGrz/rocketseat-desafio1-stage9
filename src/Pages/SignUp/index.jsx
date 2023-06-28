import { Container } from "./styles";
import { Form } from "../../Components/Form"
import { Input } from "../../Components/Input"
import { Section } from "../../Components/Section"
import { MdOutlineEmail } from "react-icons/md"
import { FaLock, FaUser } from "react-icons/fa"
import { Button } from "../../Components/Button";
import { ButtonBack } from "../../Components/ButtonBack";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <main>
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>
        <Section title="Crie sua conta">
          <Form>
            <Input icon={FaUser} type="text" placeholder="Nome" />
            <Input icon={MdOutlineEmail} type="email" placeholder="E-mail" />
            <Input icon={FaLock} type="password" placeholder="Senha" />
          </Form>

          <Button title="Cadastrar" />
        </Section>
        <ButtonBack title="Voltar para o login" />
      </main>
      <div id="bg-image"></div>
    </Container>
  )
}