import { useReducer } from 'react';

import {  createContext } from "react";

export  const TodoItemsContext  = createContext({
  todo: [],
  addNewTodo: () => {},
  deleteItem: () => {}
})
const todoItemReducer = (currentTodoItems , action) => {
  let newTodoItems  = currentTodoItems;
  if(action.type === "NEW_ITEM")
  {
        newTodoItems = [...currentTodoItems, {text: action.payload.todoItem, date: action.payload.dueDate}]
  }
  else if(action.type === "DELETE_ITEM")
  {
    newTodoItems = currentTodoItems.filter((item) => item.text !== action.payload.todoItemName)
  }
  return newTodoItems;
}

const TodoItemsContextProvider = ({ children }) =>{
  const [todo , dispatchItems] = useReducer(todoItemReducer , []);

  const addNewTodo = (todoItem , dueDate) => {
    const newItemAction = {
      type : "NEW_ITEM", 
      payload : {
        todoItem,
        dueDate
      }
    };
    dispatchItems(newItemAction);
  }

  const deleteItem = (todoItemName) =>{
    const deleteTodoItemAction = {
      type : "DELETE_ITEM", 
      payload : {
        todoItemName
      }
    };
    dispatchItems(deleteTodoItemAction);
  }
  return (
  <TodoItemsContext.Provider 
    value ={
      {todo ,
        addNewTodo,
        deleteItem}
      }>
      {children}
  </TodoItemsContext.Provider>
  )
}
export default TodoItemsContextProvider;