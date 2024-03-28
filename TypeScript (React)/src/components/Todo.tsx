import React from 'react'
import TodoClass from '../models/TodoClass';

const Todo: React.FC<{ text: string, todo: TodoClass }> = ({ text, todo }) => {
  // console.log(todo);      // ! TodoClass {id: 'a6ddf6ba-4ef3-4ff2-9137-39678b4a5b65', text: 'Learn TypeScript'}

  return (
    <div>
      id: {todo.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Course: {text}
    </div>
  )
}

export default Todo;
