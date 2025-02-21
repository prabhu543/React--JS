import { useState } from "react";
const Input = ({ handleClick }) => {

  const [userName , setName ] = useState("");
  const [userEmail , setEmail ] = useState("");

  const buttonClick = (userName , userEmail) => {
    if(userName.trim() === "" || userEmail.trim() === "") 
      return alert("Please fill all the fields");
    handleClick(userName , userEmail);
    setName("");
    setEmail("");
  }
  return (
    <>
      <label htmlFor="Name">Name</label>
      <input id="Name"  type="text" placeholder={`Enter your name......`}
      onChange={(event) => setName(event.target.value)}
      value={userName}
      required={true}
      />
      <label htmlFor="email">Email</label>
      <input id="email"  type="text" placeholder={`Enter your email......`}
      onChange={(event) => setEmail(event.target.value)}
      value={userEmail}
      required={true}
      />
      <button
      onClick={() => buttonClick(userName , userEmail)}
      >Add</button>
    </>
  )
}

export default Input
