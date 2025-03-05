import React,{ useState } from 'react'
import Rules from "./Rules"

const Main = ({handleResetScore , selected , handleScore}) => {

  const [showRules, setShowRules] = useState("none"); // to show the rules when button clicked
  const handleShowRules = () =>{
    setShowRules((prev) => prev === "none" ? "block" : "none");
  }

    const [imageNum , setImageNum] = useState(5); // to store the image number as which image to show
    const RandomNum = () => { 
      return Math.floor(Math.random() * 6) + 1; // random number between 1-6
    }

    //function to update score
    const num =()=>{
      const numberRand = RandomNum();
      setImageNum(numberRand);
      if(numberRand === selected)
        handleScore(numberRand);
      else 
        handleScore(-2);
    }
  return (
    <>
    <div className="main">
      <div className="images">
        <img src={`https://arindal1.github.io/Dice-Game/dice-0${imageNum}.png`} alt="" 
        onClick={num}
        />
      </div>
        <p>Click on Dice to roll</p>
        <button className="reset-btn" onClick={handleResetScore}>Reset Score</button>
        <button onClick={ handleShowRules}>Show Rules</button>
    </div>
    {showRules === "block" && <Rules/>}
    </>
  )
}

export default Main
