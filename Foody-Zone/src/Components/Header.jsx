// import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h1>Food Zone </h1>
        <input type="text" placeholder="Search for food........." />
      </div>
      <div className="btn-container">
        <button>All</button>
        <button>Breakfast</button>
        <button>Launch</button>
        <button>Dinner</button>
      </div>
    </div>
  )
}

export default Header
