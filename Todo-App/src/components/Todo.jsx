import { IoIosAddCircleOutline } from "react-icons/io";
import { useRef } from "react";
const Todo = ({ addText }) => {

  const textRef = useRef("");
  const dateRef = useRef("");

  const handleClick = () => {
    if (textRef.current.value.trim() === "" || dateRef.current.value === "") {
      alert("Please enter valid text and date");
      return;
    }
    addText(textRef.current.value, dateRef.current.value);
    textRef.current.value = "";
    dateRef.current.value = "";
  };


  return (
      <div className="todo">
          <input type="text" placeholder="enter item here..." className="Input_text"
          ref = {textRef}
            />
          <input type="date" name="" id="" className="Input_date" 
          ref = {dateRef}
          />
          <button className="add_btn"
          onClick={handleClick}
          >
            <IoIosAddCircleOutline /> Add</button>
      </div>
  )
}

export default Todo
