// import Item from "./components/Item"
import Todo from "./components/Todo"
import Head from "./components/Head";
import ErrorHandled from "./components/ErrorHandled";
import { useState } from 'react';
import{ TodoItemsContext } from "./store/todo-list-store";
import TodoItems from "./components/TodoItems";

const App = () => {
  const [todo, setTodo] = useState([]);
  const addNewTodo = (todoItem , dueDate) => {
    const newTodoItems = [...todo, {text: todoItem, date: dueDate}]
    setTodo(newTodoItems);
  }

  const deleteItem = (todoItemName) =>{
    const newTodoItems = todo.filter((item) => item.text !== todoItemName)
    console.log(`deleted ${todoItemName}`);
    setTodo(newTodoItems)
  }

  return (
    <TodoItemsContext.Provider 
    value ={
      {todo ,
        addNewTodo,
        deleteItem}
      }>
    <div className = "body">
      <div className="container">
        <Head/>
        <Todo/>
        <ErrorHandled/>
        <TodoItems />
      </div>
    </div>
    </TodoItemsContext.Provider>
  )
}

export default App
