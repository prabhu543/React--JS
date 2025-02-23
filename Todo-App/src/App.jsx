// import Item from "./components/Item"
import Todo from "./components/Todo"
import Head from "./components/Head";
import ErrorHandled from "./components/ErrorHandled";
import TodoItemsContextProvider  from "./store/todo-list-store";
import TodoItems from "./components/TodoItems";


const App = () => {

  return (
    <TodoItemsContextProvider>
    <div className = "body">
      <div className="container">
        <Head/>
        <Todo/>
        <ErrorHandled/>
        <TodoItems />
      </div>
    </div>
    </TodoItemsContextProvider>
  )
}

export default App
