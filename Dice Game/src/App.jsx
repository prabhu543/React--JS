import React , { useState } from 'react'
import Home from "./Components/Home"
import GamePage from "./Components/GamePage"
import DiceGameContextProvider from "./Store/Context"
const App = () => {

  const [gamePage, setGamePage] = useState(false);

  const togglePage =() =>{
    setGamePage((prev) => !prev);
  }
  return (
    <DiceGameContextProvider>
      {gamePage ? <GamePage/> : <Home togglePage = {togglePage}/> }
    </DiceGameContextProvider>

  )
}

export default App
