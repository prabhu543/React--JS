import React, { useState, useEffect } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const Modal = ({ onClose, isUpdate, selectedContact }) => {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  // Pre-fill input fields if updating
  useEffect(() => {
    if (isUpdate && selectedContact) {
      setName(selectedContact.Name || "");
      setEmail(selectedContact.Email || "");
    }
  }, [isUpdate, selectedContact]);

  const handleSave = async (event) => {
    event.preventDefault();

    try {
      if (isUpdate && selectedContact?.id) {
        // Update existing contact
        const contactRef = doc(db, "Contacts", selectedContact.id);
        await updateDoc(contactRef, { Name, Email });
        console.log("Contact updated successfully!");
      } else {
        // Add new contact
        const contactRef = collection(db, "Contacts");
        await addDoc(contactRef, { Name, Email });
        console.log("New contact added successfully!");
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }

    onClose(); // Close modal after saving
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

        <button onClick={handleSave}>
          {isUpdate ? "Update" : "Add"} Contact
        </button>
      </div>
    </div>
  );
};

export default Modal;
