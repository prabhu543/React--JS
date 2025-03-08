import React, { useState, useEffect } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { collection, addDoc, updateDoc, doc , getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  
    // Trim values to avoid spaces-only inputs
    const trimmedName = Name.trim();
    const trimmedEmail = Email.trim();
  
    // Validation: Check if fields are empty
    if (!trimmedName || !trimmedEmail) {
      toast.error("Name and Email cannot be empty!");
      return;
    }
  
    try {
      if (isUpdate && selectedContact?.id) {
        // If no changes are made, prevent unnecessary updates
        if (selectedContact.Name === trimmedName && selectedContact.Email === trimmedEmail) {
          toast.info("No changes detected.");
          return;
        }
  
        // Update existing contact
        const contactRef = doc(db, "Contacts", selectedContact.id);
        await updateDoc(contactRef, { Name: trimmedName, Email: trimmedEmail });
        toast.success("Contact updated successfully!");
      } else {
        // Check for duplicate contacts before adding
        const contactRef = collection(db, "Contacts");
        const existingContacts = await getDocs(contactRef);
  
        const duplicate = existingContacts.docs.some(
          (doc) => doc.data().Name === trimmedName && doc.data().Email === trimmedEmail
        );
  
        if (duplicate) {
          toast.error("This contact already exists!");
          return;
        }
  
        // Add new contact
        await addDoc(contactRef, { Name: trimmedName, Email: trimmedEmail });
        toast.success("New contact added successfully!");
      }
  
      onClose(); // Close modal after saving
    } catch (error) {
      console.error(`Error: ${error}`);
      toast.error("Something went wrong!");
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

        <button onClick={handleSave}>
          {isUpdate ? "Update" : "Add"} Contact
        </button>
      </div>
    </div>
  );
};

export default Modal;
