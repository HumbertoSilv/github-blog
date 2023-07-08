// import { useParams } from "react-router-dom"

import { PersonProfile } from "../../Components/PersonProfile"

export const Profile = () => {
  // const userId = useParams()  
  return (
   <div>
    <PersonProfile />
    <div>
      Posts Container
      <div>Search</div>
      <div>Posts List</div>
    </div>
   </div>
  )
}