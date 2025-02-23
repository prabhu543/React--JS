import { IoIosAddCircleOutline } from "react-icons/io";
import { useContext,useRef } from "react";
import { TodoItemsContext } from "../store/todo-list-store"

const Todo = () => {
  const {addNewTodo} = useContext(TodoItemsContext);

  
  const textRef = useRef("");
  const dateRef = useRef("");

  const handleClick = () => {
    if (textRef.current.value.trim() === "" || dateRef.current.value === "") {
      alert("Please enter valid text and date");
      return;
    }
    addNewTodo(textRef.current.value, dateRef.current.value);
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
