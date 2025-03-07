import React, { useEffect, useState } from "react";
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
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
      <Main blur={isOpen}>
        <Header />
        <div className="container">
          <Input />
          <Add onOpen={onOpen} />
        </div>
        <div className="hero">
          {Contacts.map((user) => {
            return <User name={user.Name} email={user.Email} key={user.id} />;
          })}
        </div>
      </Main>

      {/* Popup Modal */}
      <ModalWrapper isOpen={isOpen}>
        <Modal isOpen={isOpen} onClose={onClose} />
      </ModalWrapper>
    </>
  );
};

export default App;

// Main container
const Main = styled.div`
  width: 90vw;
  max-width: 400px;
  height: 95vh;
  background-color: rgba(0, 0, 0, 0.789);
  border-radius: 2px;
  padding: 12px;
  position: relative;
  transition: filter 0.3s ease-in-out;

  /* Blur effect when modal is open */
  filter: ${(props) => (props.blur ? "blur(10px)" : "none")};
`;

// Modal Overlay
const ModalWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
