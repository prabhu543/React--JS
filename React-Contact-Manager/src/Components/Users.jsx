import User from "./User";
import EmptySet from "./EmptySet" ;
const Users = ({ userInfo ,userInfoLength }) => {
  
  return (
    <div>
      <EmptySet userInfoLength = {userInfoLength}/>
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
