import React, { useEffect, useState } from "react";
import useCustom  from "./customHooks/useCustom"
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

import Header from "./Components/Header";
import Input from "./Components/Input";
import Add from "./Components/Add";
import User from "./Components/User";
import Modal from "./Components/Modal";

const App = () => {
  const [Contacts, setContacts] = useState([]);
  
  const {isOpen , onClose , onOpen} = useCustom();


  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "Contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactList);
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <>
      <Main>
        <Header />
        <div className="container">
          <Input />
          <Add onOpen={onOpen} />
        </div>
        <div className="hero">
          {Contacts.map((user) => {
            return <User Contacts = {user} key={user.id} />;
          })}
        </div>
        {isOpen && <Modal onClose={onClose}/>}
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


