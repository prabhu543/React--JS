import React, { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const Modal = ({ onClose }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const addContact = async (contact) => {
    event.preventDefault(); // Prevent default form submission
    try{
      const contactRef = collection(db , "Contacts");
      await addDoc(contactRef , contact);
    }
    catch(error){
      console.log(`error ${error} occurred"`)
    }
  };

  return (
    <div className="blur-div">
      <div className="close_icon">
        <HiMiniXMark onClick={onClose} />
      </div>
      <div className="format">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={()=>{
          onClose();
          addContact({Name , Email});
        }
        }>Add Contact</button>
      </div>
    </div>
  );
};

export default Modal;
