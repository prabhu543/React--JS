// import React from 'react'
import Button from './components/Button'
import Input from './components/Input'

import { useState } from "react";
const App = () => {

  const [input, setInput] = useState("");

  const onButtonClick = (buttonText) => {
    if(buttonText === 'C')
      setInput("");
    else if(buttonText === '='){
      const result = eval(input);
      setInput(result.toString())
    }
    else {
      setInput(input + buttonText);
    }
  }


  return (
    <div className="body">
      <div className="container">
        <Input disVal = {input}/>
        <Button onButtonClick = {onButtonClick}/>  
      </div>
    </div>
  )
}

export default App;
