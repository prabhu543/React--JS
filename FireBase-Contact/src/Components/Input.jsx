import React from 'react'
import { IoSearch } from "react-icons/io5";

const Input = () => {
  return (
    <div className='add'>
      <IoSearch className='search-icon'/>
      <input type="text" placeholder="Search here...."/>
    </div>
  )
}

export default Input;
