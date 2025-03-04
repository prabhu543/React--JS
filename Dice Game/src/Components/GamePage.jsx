import React , {useState} from 'react'
import styled from "styled-components";
import Rules from "./Rules"
const GamePage = () => {

  const [imageNum , setImageNum] = useState(3); // to store the image number as which image to show

  const RandomNum = () => {
    let num = Math.floor(Math.random() * 6) + 1;
    setImageNum(num);
  }

  const [showRules, setShowRules] = useState("none"); // to show the rules when button clicked
  const [score, setScore] = useState(5); // to store the score of the game

  const handleShowRules = () =>{
    setShowRules((prev) => prev === "none" ? "block" : "none");
    // console.log(showRules);
  }
  const handleResetScore = () =>{
    setScore(0);
  }

  const array = [1,2,3,4,5,6];

  const [ selected, setSelected ] = useState(); // to store the selected number by user

  return (
    <div className='game-page'>
      <div className="header">
        <div className="score">
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>
        <div className="options">
        <Error>
          <h4>You have not Selected any Number</h4>
        </Error>
          <div className="boxes">
            {array.map((item,index) =>{
              return (<Box className="box" 
                isSelect={selected === item  }
                key={index}
                onClick={()=> setSelected(item)}
                >{item}</Box>)
            })}
          </div>
          <h3>Select Number</h3>
        </div>
      </div>
      <div className="main">
        <div className="images">
        <img src={`https://arindal1.github.io/Dice-Game/dice-0${imageNum}.png`} alt="" 
        onClick={RandomNum}
        />
        </div>
        <p>Click on Dice to roll</p>
        <button className="reset-btn" onClick={handleResetScore}>Reset Score</button>
        <button onClick={ handleShowRules}>Show Rules</button>
      </div>
        {showRules === "block" && <Rules/>}
    </div>
  )
}

export default GamePage


const Box = styled.div`
  background-color: ${(props) => props.isSelect ? 'black' : 'white'};
  color : ${(props) => props.isSelect ? 'white' : 'black'};
`;

const Error = styled.div`
color: red`;