import { styled } from "styled-components";

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  min-height: 100vh;
  width: 65%;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: unset;
  }
`