import { Route, Routes } from "react-router-dom"
import { Header } from "./Components/Header"
import { Profile } from "./pages/Profile"
import { Post } from "./pages/Post"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path=":profile" element={<Profile />} />
        <Route path=":profile/:postId" element={<Post />} />
      </Route>
    </Routes>
  )
}