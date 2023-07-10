import { Form, Header, SearchContainer } from "./styles"

export const Search = () => {
  return (
    <SearchContainer>
      <Header>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </Header>
      <Form>
        <input type="text" placeholder="Buscar conteúdo"/>
      </Form>
    </SearchContainer>
  )
}