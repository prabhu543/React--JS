import { useState } from "react";
import Users from "./Components/Users" ;
import AddContact from "./Components/AddContact" ;

const App = () => {
  const [userInfo , setUserInfo] = useState([]);

  const handleClick = (userName , userEmail) => {
    // console.log(`${userName} at email is  ${userEmail}`);
    let newUser = [...userInfo , {name : userName , email : userEmail}];
    setUserInfo(newUser);
  }

  const deleteBtn = ( email ) =>{
    // console.log(`email : ${email}`);
    const newUser = userInfo.filter((user) => user.email !== email);
    setUserInfo(newUser);
  }
  
  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <AddContact  handleClick = {handleClick}/>
      <hr />
      <div className="contactDiv">
        <h2>Contact List</h2>
        <Users userInfo = {userInfo} userInfoLength = {userInfo.length} deleteBtn ={deleteBtn}/>
      </div>
    </div>
  )
}

export default App;