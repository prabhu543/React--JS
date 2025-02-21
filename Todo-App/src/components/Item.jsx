import { MdDeleteOutline } from "react-icons/md";
// import Styles from "./Item.module.css";
const Item = ({text , date , deleteBtn}) => {
  return (
      <div className="item">
        <div className="item_text">{text}</div>
        <div className="item_date">{date}</div>
        <button 
        className={`delete_btn `}
        onClick={() => deleteBtn(text)}
        >
          <MdDeleteOutline />
        </button>
      </div>
  )
}

export default Item;