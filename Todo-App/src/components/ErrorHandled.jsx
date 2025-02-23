// import React from 'react'
import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-list-store';

import Style from './Error.module.css'
const ErrorHandled = () => {

  const {todo} = useContext(TodoItemsContext);

  return (
    <div className={`${Style.error}`}>
      { todo.length === 0 && <p>Enter some food to get started</p>}
    </div>
  )
}

export default ErrorHandled
