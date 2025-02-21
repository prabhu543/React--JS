import {useState} from "react";
import Style from "./App.module.css";
import Button from "./components/Button";



const App = () => {
  const [count , setCount] = useState(0);

  const incrementCount =() => {
    setCount(count + 1)
  }
  const decrementCount =() => {
    setCount(count - 1)
  }
  const resetCount =() => {
    setCount(0);
  }

  return (
  <div className={` ${Style.wrapper}`}>
    <div className = {Style.container}>
      <p>Count :  {count}</p>
      <div className = {Style.buttonContainer}>
        <Button onClickButton = {incrementCount} text = "Increment"></Button>
        <Button onClickButton = {resetCount} text = "Reset"></Button>
        <Button onClickButton = {decrementCount} text = "Decrement"></Button>
      </div>
    </div>
  </div>
  )
}

export default App
