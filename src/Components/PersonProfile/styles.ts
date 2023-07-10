import { styled } from "styled-components";

export const PersonProfileContainer = styled.div`
  display: flex;
  width: 65%;
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
  justify-content: space-between;
  gap: 10px;

  span {
    line-height: 1.5;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    font-size: 1.5rem;
    color: ${props => props.theme["base-title"]};
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
  padding: 20px 0 0;

  img {
    width: 18px;
  }

  svg {
    fill: #0562dc;
  }

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`