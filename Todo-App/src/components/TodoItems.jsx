// import React from 'react'
import { TodoItemsContext } from "../store/todo-list-store";
import { useContext } from "react";

import Item from './Item'
const TodoItems = () => {

  const {todo } = useContext(TodoItemsContext);

  return (
    <div className="list">
          {todo.map((todo,index) =>{
            return <Item text = {todo.text} date = {todo.date} key = {index}/>
          })}
    </div>
  )
}

export default TodoItems;
