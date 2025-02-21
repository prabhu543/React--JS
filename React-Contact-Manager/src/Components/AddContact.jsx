import Input from "./Input";
// import { useState } from "react";

const AddContact = ({ handleClick }) => {

  return (
    <div className="addContact">
      <h2>Add Contact</h2>
      <Input handleClick = {handleClick}/>
    </div>
  )
}

export default AddContact

