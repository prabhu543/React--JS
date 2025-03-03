import React , {useState} from 'react'
import styled from "styled-components";
import Rules from "./Rules"
const GamePage = () => {

  const [showRules, setShowRules] = useState("none");


  const handleShowRules = () =>{
    setShowRules((prev) => prev === "none" ? "block" : "none");
    console.log(showRules);
  }

  const array = [1,2,3,4,5,6];
  const [ selected, setSelected ] = useState(3);
  return (
    <div className='game-page'>
      <div className="header">
        <div className="score">
          <h1>0</h1>
          <p>Total Score</p>
        </div>
        <div className="options">
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
        <img src="https://clipground.com/images/number-3-dice-clipart-black-and-white-6.gif" alt="" />
        </div>
        <p>Click on Dice to roll</p>
        <button className="reset-btn">Reset Score</button>
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