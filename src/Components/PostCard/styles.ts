import { styled } from "styled-components";

export const PostCardContainer = styled.div`
  padding: 35px;
  border-radius: 10px;
  border: 3px solid transparent;
  background: ${props => props.theme["base-post"]};
  transition: all 0.5s;

  p {
    padding-top: 25px;
    line-height: 1.5;
  }

  &:hover {
    border: 3px solid ${props => props.theme["base-label"]};
    transition: all 0.5s;
  }
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;

  h2 {
    font-size: 20px;
    line-height: 1.5;
    color: ${props => props.theme["base-title"]};
  }
`