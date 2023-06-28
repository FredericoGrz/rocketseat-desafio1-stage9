import { Container } from "./styles";
import { Form } from "../../Components/Form"
import { Input } from "../../Components/Input"
import { Section } from "../../Components/Section"
import { MdOutlineEmail } from "react-icons/md"
import { FaLock } from "react-icons/fa"
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <main>
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>
        <Section title="Faça seu login">
          <Form>
            <Input icon={MdOutlineEmail} type="email" placeholder="E-mail" />
            <Input icon={FaLock} type="password" placeholder="Senha" />
          </Form>

          <Button title="Entrar" />
        </Section>
        <Link to="/register">Criar conta</Link>
      </main>
      <div id="bg-image"></div>
    </Container>
  )
}