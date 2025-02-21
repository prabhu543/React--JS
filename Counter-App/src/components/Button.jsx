// import React from 'react'

const Button = ({ onClickButton , text}) => {
  return (
    <>
      <button onClick = { onClickButton } >{text}</button>
    </>
  )
}

export default Button
