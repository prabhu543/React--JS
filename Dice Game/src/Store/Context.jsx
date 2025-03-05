import { createContext , useState } from "react";

export const DiceGameContext= createContext();

const DiceGameContextProvider = ({ children }) =>{  
  const [score, setScore] = useState(0); // Stores the game score
  const [selected, setSelected] = useState(null); // Tracks the selected number
  
  const handleResetScore = () => {
    setScore(0);
  };

  const handleScore = (value) => {
    setScore((prevScore) => (selected === null ? value : prevScore + value));
  };

  // Function to toggle the selected number
  const handleSelect = (item) => {
    setSelected((prevSelected) => (prevSelected === item ? null : item));
  };

  return (
    <DiceGameContext.Provider value={{
      score, selected, handleResetScore,handleScore,handleSelect
    }}>
      {children}
    </DiceGameContext.Provider>
  )
}
export default DiceGameContextProvider;