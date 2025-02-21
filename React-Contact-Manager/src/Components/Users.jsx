// import React from 'react'
import User from "./User";
const Users = () => {

  const usersInfo = [
    { name: "Alice Johnson", email: "alice@example.com" },
    { name: "Bob Smith", email: "bob@example.com" }
  ];
  
  return (
    <div>
      {usersInfo.map((info , index) => {
        return (
        <User key= {index} 
        name = {info.name} 
        email = {info.email}
        />);
      })}
    </div>
  )
}

export default Users
