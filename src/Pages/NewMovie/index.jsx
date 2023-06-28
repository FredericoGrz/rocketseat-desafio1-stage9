import { Container, GenreList, GenreItem } from "./styles";
import { ButtonBack } from "../../Components/ButtonBack";
import { Header } from "../../Components/Header"
import { Button } from "../../Components/Button"
import { Form } from "../../Components/Form";
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea"
import { Section } from "../../Components/Section"
import { FiPlus, FiX } from "react-icons/fi"

export function NewMovie() {
  return (
    <Container>
      <Header noInput />
      <main>
        <header>
          <ButtonBack />
          <h1>Novo Filme</h1>
        </header>
        <Form>
          <div className="col-2">
            <Input type="text" placeholder="Título" />
            <Input type="number" min={1} max={5} placeholder="Sua nota (de 1 a 5)" />
          </div>
          <TextArea placeholder="Observações" />
        </Form>
        <Section title="Marcadores">
          <GenreList>
            <GenreItem>
              Terror
              <button><FiX /></button>
            </GenreItem>
            <GenreItem>
              Comedia
              <button><FiX /></button>
            </GenreItem>
            <GenreItem className="new-genre">
              <input type="text" placeholder="Novo marcador" />
              <button><FiPlus /></button>
            </GenreItem>
          </GenreList>
        </Section>
        <div className="col-2">
          <Button title="Excluir filme" alt />
          <Button title="Salvar alterações" />
        </div>
      </main>
    </Container>
  )
}