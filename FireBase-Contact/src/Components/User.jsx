import React from 'react'
import { CgProfile } from "react-icons/cg";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin5Line } from "react-icons/ri";

import {deleteDoc , doc} from "firebase/firestore";
import {db} from "../config/firebase"
const User = ({Contacts}) => {

const deleteContact = async (id) =>{
  try{
    await deleteDoc(doc(db , "Contacts" , id))
  }
  catch(error)
  {
    console.log(`error ${error} occurred"`)
  }
}


  return (
    <div className='userDiv'>
      <div className="text">
      <CgProfile className='profile_icon'/>
      <div className="info">
          <h3>{Contacts.Name}</h3>
          <p>{Contacts.Email}</p>
        </div>
      </div>
      <div className="icons">
        <LiaEdit /> {/* edit button */}
        <RiDeleteBin5Line onClick = {() => deleteContact(Contacts.id)}/> 
      </div>
    </div>
  )
}

export default User
