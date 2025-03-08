import React, { useEffect, useState } from "react";
import useCustom  from "./customHooks/useCustom"
import styled from "styled-components";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./Components/Header";
import Input from "./Components/Input";
import Add from "./Components/Add";
import User from "./Components/User";
import Modal from "./Components/Modal";
import NotFound from "./Components/NotFound";

const App = () => {
  const [Contacts, setContacts] = useState([]);
  
  const {isOpen , onClose , onOpen} = useCustom();


  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "Contacts");

        onSnapshot(contactsRef,(snapShot)=>{
          const contactList = snapShot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList;
        })
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

const filterContacts = (e) =>{
  const value = e.target.value;

  const contactsRef = collection(db, "Contacts");
  onSnapshot(contactsRef,(snapShot)=>{
    const contactList = snapShot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    const filteredContacts = contactList.filter(contact => contact.Name.toLowerCase().includes(value.toLowerCase()))
    setContacts(filteredContacts);
    return filteredContacts;
  })
}

  return (
    <>
      <Main>
        <Header />
        <div className="container">
          <Input filterContacts = { filterContacts }/>
          <Add onOpen={onOpen} />
        </div>
        <div className="hero">
          {Contacts.length <= 0 ? <NotFound/> : Contacts.map((user) => {
            return <User Contacts = {user} key={user.id} />;
          })}
        </div>
        
        {isOpen && <Modal onClose={onClose}/>}
        <ToastContainer
        className="toast"
        />
      </Main>
    </>
  );
};

export default App;

// Main container
const Main = styled.div`
  width: 100vw;
  max-width: 400px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.789);
  border-radius: 2px;
  padding: 12px;
  position: relative;

`;


