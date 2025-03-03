import React , { useState } from 'react'
import Home from "./Components/Home"
import GamePage from "./Components/GamePage"

const App = () => {

  const [gamePage, setGamePage] = useState(false);

  const togglePage =() =>{
    setGamePage((prev) => !prev);
  }
  return (
    <>
      {gamePage ? <GamePage/> : <Home togglePage = {togglePage}/> }
      {/* <GamePage/> */}
    </>
  )
}

export default App
