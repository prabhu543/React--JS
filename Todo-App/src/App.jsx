import Item from "./components/Item"
import Todo from "./components/Todo"
import Head from "./components/Head";
import ErrorHandled from "./components/ErrorHandled";
import { useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState([]);
  const handleNewTodo = (todoItem , dueDate) => {
    const newTodoItems = [...todo, {text: todoItem, date: dueDate}]
    setTodo(newTodoItems);
  }

  const deleteBtn = (todoItemName) =>{
    const newTodoItems = todo.filter((item) => item.text !== todoItemName)
    console.log(`deleted ${todoItemName}`);
    setTodo(newTodoItems)
  }
  return (
    <div className = "body">
      <div className="container">
        <Head/>
        <Todo addText = {handleNewTodo}/>
        <ErrorHandled text = {todo.length}/>
        <div className="list">
          {todo.map((todo,index) =>{
            return <Item text = {todo.text} date = {todo.date} key = {index}
            deleteBtn = {deleteBtn}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
