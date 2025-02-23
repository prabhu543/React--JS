import { MdDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-list-store"
// import Styles from "./Item.module.css";
const Item = ({text , date }) => {

  const { deleteItem } = useContext(TodoItemsContext);
  
  return (
      <div className="item">
        <div className="item_text">{text}</div>
        <div className="item_date">{date}</div>
        <button 
        className={`delete_btn `}
        onClick={() => deleteItem(text)}
        >
          <MdDeleteOutline />
        </button>
      </div>
  )
}

export default Item;