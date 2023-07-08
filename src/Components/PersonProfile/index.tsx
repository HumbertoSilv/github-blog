import { ArrowSquareOut } from "phosphor-react"
import { PersonProfileContainer, Content, Header, IconsList } from "./styles"
import Github from "../../assets/github.svg"
import Building from "../../assets/building.svg"
import Group from "../../assets/group.svg"

export const PersonProfile = () => {
  return (
    <PersonProfileContainer>
      <img src="https://github.com/humbertosilv.png" alt="" />
      <Content>
        <Header>
          <h1>Humberto Silva</h1>
          <a href="#">GITHUB 
            <ArrowSquareOut size={15} weight="bold" />
          </a>
        </Header>
        <span>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</span>
        <IconsList>
          <span>
            <img src={Github} alt="" />
            humbertosilv
          </span>
          <span>
            <img src={Building} alt="" />
            Rocketseat
            </span>
          <span>
            <img src={Group} alt="" />
            seguidores
            </span>
        </IconsList>
      </Content>
    </PersonProfileContainer>
  )
}