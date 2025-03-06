// import React from 'react'
import Button from "./Button"
import Form from "./Form"
import ContactImage from "./ContactImage"

import styled from "styled-components"

const Contact = () => {
  return (
    <Hero>
      <div className="text">
        <Heading>CONTACT US</Heading>
        <Paragraph>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 
        </Paragraph>
      </div>
      <div className="contact">
        <div className="container">
          <Button/>
          <Form/>
        </div>
        <ContactImage/>
      </div>
    </Hero>
  )
}

export default Contact

const Heading = styled.h1`
  font-weight: 800;
  font-size: 35px;
`;
const Paragraph = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-size: 15px;
  font-weight: 500;
  max-width: 90%;
  margin:10px 0;
`;
const Hero = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px); /* Remaining space after header */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
