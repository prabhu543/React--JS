import React from 'react'

const Form = () => {
  return (
    <div className="inputs">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button className="btn submit-btn">Submit</button>
    </div>
  )
}

export default Form
