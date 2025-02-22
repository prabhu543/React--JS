import { useRef } from "react";
const Input = ({ handleClick }) => {

  const userName = useRef("");
  const userEmail = useRef("");

  const buttonClick = (userName , userEmail) => {
    let name = userName.current.value;
    let email = userEmail.current.value;

    if(userName.current.value.trim() === "" || userEmail.current.value.trim() === "") 
      return alert("Please fill all the fields");
    
    handleClick( name , email);
    userName.current.value = "";
    userEmail.current.value = "";
  }
  return (
    <>
      <label htmlFor="Name">Name</label>
      <input id="Name"  type="text" placeholder={`Enter your name......`}
      ref = {userName}
      required={true}
      />
      <label htmlFor="email">Email</label>
      <input id="email"  type="text" placeholder={`Enter your email......`}
      ref={userEmail}
      required={true}
      />
      <button
      onClick={() => buttonClick(userName, userEmail)}
      >Add</button>
    </>
  )
}

export default Input
