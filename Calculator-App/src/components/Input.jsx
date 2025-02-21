// import React from 'react'

const Input = ({disVal}) => {
  return (
    <div className="inputs">
      <input 
      type="text" 
      value = {disVal}
      readOnly/>
    </div> 
  )
}

export default Input
