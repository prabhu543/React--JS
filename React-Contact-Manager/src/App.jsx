// import React from 'react'
import User from "./Components/User" ;
import H2Header2 from "./Components/H2Header2" ;
import H2Header1 from "./Components/H2Header1" ;

const App = () => {
  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <div className="addContact">
        <H2Header1/>
        
        <button>Add</button>
      </div>

      <hr />

      <div className="contactDiv">
        <H2Header2/>
        <div className="list">
          <User/>
          <User/>
        </div>
      </div>
    </div>
  )
}

export default App

