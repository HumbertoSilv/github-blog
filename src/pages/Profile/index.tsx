// import { useParams } from "react-router-dom"

import { PersonProfile } from "../../Components/PersonProfile"
import { Post } from "../../Components/Post"
import { Search } from "../../Components/Search"
import { PostsList } from "./styles"

export const Profile = () => {
  // const userId = useParams()  
  return (
   <div>
    <PersonProfile />
    <Search />
    <PostsList>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </PostsList>
   </div>
  )
}