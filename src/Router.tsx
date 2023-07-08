import { Route, Routes } from "react-router-dom"
import { Header } from "./Components/Header"
import { Profile } from "./pages/Profile"
import { Issues } from "./pages/Issues"

export const Router = () => {
  return (
    <Routes>
      <Route path="/profile" element={<Header />}>
        <Route path=":userId" element={<Profile />} />
        <Route path=":userId/:issueId" element={<Issues />} />
      </Route>
    </Routes>
  )
}