import React from "react";
import styled from "styled-components";

const Modal = ({ onClose, isOpen, children }) => {
  if (!isOpen) return null; // Don't render if isOpen is false

  return (
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
        <FormContainer>
          <label htmlFor="name">Name :</label>
          <input type="text" placeholder="Enter name" name="name"/>
          <label htmlFor="email">Email :</label>
          <input type="text" placeholder="Enter email" name="email"/>
        </FormContainer>
        <Button>Add</Button>
      </ModalContent>
  );
};

export default Modal;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.41); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px); /* Blur effect */
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  input::placeholder {
    color: #888;
  }
`;

const Button = styled.button`
  border:1px solid black;
  outline:none;
  background-color:#fcca3f;
  padding:10px 30px;
  float:right;
  margin-top :10px;
`