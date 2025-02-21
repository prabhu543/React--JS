// import React from 'react'

const Button = ({ onButtonClick }) => {
  const text = ['C',1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '='];

  return (
      <div className="buttons">
        {text.map((item) =>
        { 
        return <button key={item} onClick ={() => onButtonClick(item)}>{item}</button > ;
        }
        )}
      </div>
  )
}

export default Button
