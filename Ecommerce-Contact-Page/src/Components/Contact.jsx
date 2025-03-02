// import React from 'react'
import { MdChat } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
const Contact = () => {
  return (
    <div className="hero-section">
      <div className="text">
        <h1>CONTACT US</h1>
        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 
        </p>
      </div>
      <div className="contact">
        <div className="container">
          <div className="buttons">
            <button className="btn"> <MdChat />VIA SUPPORT CHAT</button>
            <button className="btn"> <IoMdCall />VIA CALL</button>
            <button className="btn email-btn"> <MdChat />VIA EMAIL FORM</button>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button className="btn submit-btn">Submit</button>
          </div>
        </div>
        <div className="images">
          <img src="https://img.freepik.com/vecteurs-libre/service-24-7-illustration-concept_114360-7380.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact
