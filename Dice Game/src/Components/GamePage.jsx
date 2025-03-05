import React, { useState } from 'react';
import styled from "styled-components";
import Error from "./Error";
import Score from "./Score";
import Main from "./Main";

const GamePage = () => {
  const [score, setScore] = useState(0); // Stores the game score
  const [selected, setSelected] = useState(null); // Tracks the selected number

  const handleResetScore = () => {
    setScore(0);
  };

  const handleScore = (value) => {
    setScore((prevScore) => (selected === null ? value : prevScore + value));
  };

  const array = [1, 2, 3, 4, 5, 6];

  // Function to toggle the selected number
  const handleSelect = (item) => {
    setSelected((prevSelected) => (prevSelected === item ? null : item));
  };

  return (
    <div className="game-page">
      <div className="header">
        <Score score={score} />
        <div className="options">
          {!selected && <Error />}
          <div className="boxes">
            {array.map((item, index) => (
              <Box
                className="box"
                isSelect={selected === item}
                key={index}
                onClick={() => handleSelect(item)}
              >
                {item}
              </Box>
            ))}
          </div>
          <Head3>Select Number</Head3>
        </div>
      </div>
      <Main handleResetScore={handleResetScore} selected={selected} handleScore={handleScore} />
    </div>
  );
};

export default GamePage;

// Styled Components
const Box = styled.div`
  background-color: ${(props) => (props.isSelect ? 'black' : 'white')};
  color: ${(props) => (props.isSelect ? 'white' : 'black')};
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  border: 1px solid black;
`;

const Head3 = styled.div`
  font-weight: 600;
  width: 100%;
  text-align: right;
`;
