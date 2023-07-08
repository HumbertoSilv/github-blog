import { styled } from "styled-components";

export const PersonProfileContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  margin-top: -80px; 
  padding: 30px;
  gap: 30px;
  border-radius: 10px;

  background: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  img {
    width: 150px;
    border-radius: 10px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    font-size: 1.5rem;
  }

  a {
    display: flex;
    gap: 5px;
    align-items: end;
    text-decoration: none;
    font-size: 0.7rem;
    font-weight: 700;
    color: ${props => props.theme.blue};
  }

  a:hover {
    border-bottom: 1px solid;
  }
`

export const IconsList = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 18px;
  }

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`