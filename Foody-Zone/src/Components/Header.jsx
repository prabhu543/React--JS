// import React from 'react'
import Button from "./Button"

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h1>F<span>oo</span>dy Z<span>o</span>ne </h1>
        <input type="text" placeholder="Search for food........." />
      </div>
      <div className="btn-container">
        <Button value= {"All"}/>
        <Button value= {"Breakfast"}/>
        <Button value= {"Launch"}/>
        <Button value= {"Dinner"}/>
      </div>
    </div>
  )
}

export default Header
