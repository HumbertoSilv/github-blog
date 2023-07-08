import { Outlet } from "react-router-dom"
import { HeaderContainer } from "./styles"

export const Header = () => {
  return (
    <>
      <HeaderContainer />
      <Outlet />
    </>
  )
}