// import React from 'react'
import { RiDeleteBin4Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const App = () => {
  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <div className="addContact">
        <h2>Add Contact</h2>
        <div className="inputs">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Enter your Name"/>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your Email"/>
        </div>
        <button>Add</button>
      </div>
      <div className="contactDiv">
        <h2>Contact List</h2>
        <div className="list">
          <div className="user">
            <div className="profile">
              <img src="./assets/Profile.png" alt="" />
              <div className="info">
                <h3>Name</h3>
                <p>Email</p>
              </div>
            </div>
            <div className="buttons">
              <FaRegEdit />
              <RiDeleteBin4Line />
            </div>
          </div>
          <div className="user">
          <div className="profile">
              <img src="./assets/Profile.png" alt="" />
              <div className="info">
                <h3>Name</h3>
                <p>Email</p>
              </div>
            </div>
            <div className="buttons">
              <FaRegEdit />
              <RiDeleteBin4Line />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

