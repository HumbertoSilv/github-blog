import { NavLink } from "react-router-dom"
import { PostContainer, Header, Content } from "./styles"
import { ArrowSquareOut, CaretLeft } from "phosphor-react"
import Github from "../../assets/github.svg"
import Calendar from "../../assets/calendar.svg"
import Comment from "../../assets/comment.svg"

export const Post = () => {
  return (
    <PostContainer>
      <Header>
        <nav>
          <NavLink to="/profile">
            <CaretLeft size={15} weight="bold" />
            VOLTAR
          </NavLink>
          <a href="#">
            VER NO GITHUB
            <ArrowSquareOut size={15} weight="bold" />
          </a>
        </nav>
        <h2>JavaScript data types and data structures</h2>
        <footer>
          <span>
            <img src={Github} alt="" />
            humbertosilv
          </span>
          <span>
            <img src={Calendar} alt="" />
            Há 1 dia
            </span>
          <span>
            <img src={Comment} alt="" />
            5 Comentários
          </span>
        </footer>
      </Header>
      <Content>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
        Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
      </Content>
    </PostContainer>
  )
}