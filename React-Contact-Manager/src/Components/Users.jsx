import User from "./User";
import EmptySet from "./EmptySet" ;

import { useContext } from "react" ;
import { UserDataContext } from "../store/UserData" ;
const Users = () => {

  const { userInfo  } = useContext(UserDataContext);

  return (
    <div>
      <EmptySet/>
      {userInfo.map((info , index) => {
        return (
        <User key= {index} 
        name = {info.name} 
        email = {info.email}
        />);
      })}
    </div>
  )
}

export default Users;
