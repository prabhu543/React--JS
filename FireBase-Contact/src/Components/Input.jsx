import React from 'react'
import { IoSearch } from "react-icons/io5";

import NotFound from './NotFound';

const Input = ({ filterContacts }) => {
  return (
    <>
    <div className='add'>
      <IoSearch className='search-icon'/>
      <input type="text" placeholder="Search here...." onChange={filterContacts}/>
    </div>
    {filterContacts.length === 0 && <NotFound/>}
    </>
  )
}

export default Input;
