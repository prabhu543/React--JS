import React from 'react'
import { MdChat } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Button = () => {
  return (
    <div className="buttons">
            <button className="btn"> <MdChat />VIA SUPPORT CHAT</button>
            <button className="btn"> <IoMdCall />VIA CALL</button>
            <button className="btn email-btn"> <MdChat />VIA EMAIL FORM</button>
    </div>
  )
}

export default Button
