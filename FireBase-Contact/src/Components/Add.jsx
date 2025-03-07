import React from 'react'
import { IoMdAdd } from "react-icons/io";
const Add = ({onOpen}) => {
  return (
    <div className='add-icon' onClick={onOpen}>
      <IoMdAdd />
    </div>
  )
}

export default Add
