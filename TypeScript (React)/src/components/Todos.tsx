import React from 'react'
import TodoClass from '../models/TodoClass';
import Todo from './Todo';

// ! items-ler data typesi obyekt olsalarda classlardan geldiyi ucun TodoClass[ yazilmalidir]
// Todo: You can use class (TodoClass) also as type   and type of TodoClass : { id: string, text : string }
const Todos: React.FC<{ items: TodoClass[] }> = (props) => {
  // console.log(props.items);           // ! (2) [ TodoClass {id: 1, text: 'Learn React'}, TodoClass {id: 2, text: 'Learn TypeScript'}  ]
  
  return (
    <>
      <ul>
        {props.items.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
      
      {props.items.map((item) => <Todo key={item.id} text={item.text} todo={item} />)}
    </>
  )
}

export default Todos;

