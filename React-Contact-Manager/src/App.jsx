import { useState } from "react";
import Users from "./Components/Users" ;
import AddContact from "./Components/AddContact" ;

// import { useContext } from "react";
import { UserDataContext } from "./store/UserData";

const App = () => {
  const [userInfo , setUserInfo] = useState([]);

  const addNewUser = (userName , userEmail) => {
    // console.log(`${userName} at email is  ${userEmail}`);
    let newUser = [...userInfo , {name : userName , email : userEmail}];
    setUserInfo(newUser);
  }

  const deleteUser = ( email ) =>{
    // console.log(`email : ${email}`);
    const newUser = userInfo.filter((user) => user.email !== email);
    setUserInfo(newUser);
  }

  return (
    <UserDataContext.Provider 
      value={
        {userInfo ,
          addNewUser,
          deleteUser
        }}>
    <div className="container">
      <h1>Contact Manager</h1>
      <AddContact/>
      <hr />
      <div className="contactDiv">
        <h2>Contact List</h2>
        <Users userInfo = {userInfo} userInfoLength = {userInfo.length} deleteBtn ={deleteUser}/>
      </div>
    </div>
  </UserDataContext.Provider>
  )
}

export default App;