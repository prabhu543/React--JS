import React,{useState} from 'react';
import { CgProfile } from "react-icons/cg";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin5Line } from "react-icons/ri";
import useCustom from "../customHooks/useCustom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from 'react-toastify';

import Modal from './Modal';

const User = ({ Contacts }) => {
  const { isOpen, onClose, onOpen } = useCustom();
  const [selectedContact, setSelectedContact] = useState(null);

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "Contacts", id));
      toast.success("Contact deleted successfully!")
    } catch (error) {
      console.log(`Error: ${error} occurred`);
    }
  };

  const handleEdit = () => {
    setSelectedContact(Contacts);
    onOpen();
  };

  return (
    <>
      <div className='userDiv'>
        <div className="text">
          <CgProfile className='profile_icon' />
          <div className="info">
            <h3>{Contacts.Name}</h3>
            <p>{Contacts.Email}</p>
          </div>
        </div>
        <div className="icons">
          <LiaEdit onClick={handleEdit} /> {/* edit button */}
          <RiDeleteBin5Line onClick={() => deleteContact(Contacts.id)} />
        </div>
      </div>
      {isOpen && (
        <Modal 
          onClose={onClose} 
          isUpdate 
          selectedContact={selectedContact} 
        />
      )}
    </>
  );
};

export default User;
