import React from 'react'
import { CgProfile } from "react-icons/cg";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin5Line } from "react-icons/ri";
const User = ({name , email}) => {
  return (
    <div className='userDiv'>
      <div className="text">
      <CgProfile className='profile_icon'/>
      <div className="info">
          <h3>{name}</h3>
          <p>{email}</p>
        </div>
      </div>
      <div className="icons">
        <LiaEdit />
        <RiDeleteBin5Line />
      </div>
    </div>
  )
}

export default User
