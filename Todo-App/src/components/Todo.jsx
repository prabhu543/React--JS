import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";
const Todo = ({ addText }) => {

  const [text , setText] = useState("");
  const [date , setDate] = useState("");

  const handleClick = () => {
    if (text.trim() === "" || date === "") {
      alert("Please enter valid text and date");
      return;
    }
    addText(text, date);
    setText("");  // Reset input
    setDate("");
  };


  return (
      <div className="todo">
          <input type="text" placeholder="enter item here..." className="Input_text"
          value = {text}
          onChange={(event) => setText(event.target.value)}
            />
          <input type="date" name="" id="" className="Input_date" 
          value = {date}
          onChange={(event) => setDate(event.target.value)}
          />
          <button className="add_btn"
          onClick={handleClick}
          ><IoIosAddCircleOutline /> Add</button>
      </div>
  )
}

export default Todo
