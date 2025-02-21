// import React from 'react'
import { RiDeleteBin4Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const User = () => {
  return (
    <div className="user">
      <div className="profile">
        <img src="https://www.pngall.com/wp-content/uploads/5/Profile.png" alt="" />
        <div className="info">
          <h3>Name</h3>
          <p>Email</p>
        </div>
      </div>
      <div className="buttons">
        <FaRegEdit />
        <RiDeleteBin4Line />
      </div>
    </div>
  )
}

export default User
