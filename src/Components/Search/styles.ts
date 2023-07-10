import { styled } from "styled-components";

export const SearchContainer = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 65px 0 40px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  h1 {
    font-size: 18px;
    color: ${props => props.theme["base-text"]};
  }

  span {
    font-size: 14px;
    color: ${props => props.theme["base-span"]};
  }
`

export const Form = styled.form`
  display: flex;

  input {
    flex: 1;
    border: 1px solid ${props => props.theme["base-border"]};
    border-radius: 5px;
    background: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-text"]};
    padding: 0.8rem;

    &::placeholder {
      color: ${props => props.theme["base-label"]};
    }
  }
`
