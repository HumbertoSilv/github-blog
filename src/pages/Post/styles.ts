import { styled } from "styled-components";

export const PostContainer = styled.div`
  min-height: 100vh;
  width: 65%;
  margin: 0 auto;
`

export const Header = styled.div`
  margin-top: -80px; 
  padding: 30px;
  border-radius: 10px;

  background: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  nav {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      gap: 5px;
      text-decoration: none;
      font-size: 0.7rem;
      font-weight: 700;
      color: ${props => props.theme.blue};
      border: 1px solid transparent;

      transition: all 0.5s;
    }

    a:hover {
      transition: all 0.5s;
      border-bottom: 1px solid;
    }
  }

  h2 {
    padding-top: 20px;
    font-size: 1.5rem;
    color: ${props => props.theme["base-title"]};
  }

  footer {
    display: flex;
    gap: 20px;
    padding-top: 10px;
    
    img {
      opacity: 30%;
      width: 18px;
    }

    svg {
      fill: #0562dc;
    }

    span {
      display: flex;
      align-items: center;
      gap: 8px;

      color: ${props => props.theme["base-span"]};
    }
  }
`

export const Content = styled.div`
  padding: 35px;
`