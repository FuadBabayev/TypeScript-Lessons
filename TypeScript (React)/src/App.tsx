import React, { useState } from 'react'
import './App.css';
import Udemy from './components/Udemy';
import Todos from './components/Todos';
import TodoClass from './models/TodoClass';
import NewTodo from './components/NewTodo';


export default function App() {
  const todos = [new TodoClass('Learn React'), new TodoClass('Learn TypeScript')];
  // console.log(todos);    // ! (2) [ TodoClass {id: 1, text: 'Learn React'}, TodoClass {id: 2, text: 'Learn TypeScript'}  ]

  const [todo, setTodo] = useState<TodoClass[]>(todos);

  const addTodoHandler = (todoText : string) => {
    const newTodo = new TodoClass(todoText);         // console.log(newTodo);       TodoClass {id: '123', text: 'SomeThing you wrote'}
    
    setTodo((prevTodo) => [...prevTodo, newTodo]);
    // setTodo((prevTodo) => {
    //   return prevTodo.concat(newTodo)      // ! Concat method creates new array
    // });
  }

  const removeTodoHandler = (deletedId : string) => {
    setTodo((delet) => {
      return delet.filter((remain) => remain.id !== deletedId );
    })
  }

  return (
    <div>
      <User name='Fuad' age={25} job={false} />
      <User2 name='Fuad' age={25} job={false} />
      <User3 name='Fuad' age={25} job={false} />

      <Udemy courses={['Learn React', 'Learn TypeScript', 'Learn MERN Stack']} />
      <Todos items={todos} /> <br />  

      <NewTodo onAddTodo={addTodoHandler} onRemoveTodo={removeTodoHandler} todo={todo} />
    </div>
  )
}


// ! Props ozu obyekt oluduqu ucun biz function Name(props) evezine function Name(props : {}) yazib icindeki itemlere type veririrk
// * Bu yazilis usulundan demek olarki istifade etmeyeceyik
function User(props: { name: string, age: number, job: boolean }) {
  return <p>Name: {props.name} <br /> Age: {props.age} <br /> Has Job: {props.job}</p>
}

// ! Generic Type (Functional Component) React.FC
// Todo: In order to use Functional Component (React.FC) we must use Arrow function snytax
const User2: React.FC<{ name: string, age: number, job: boolean }> = (props) => {
  return <p>Name: {props.name} <br /> Age: {props.age} <br /> Has Job: {props.job} </p>
}

// * Esasen bu yazilis uslubundan istifade olunur
const User3: React.FC<{ name: string, age: number, job: boolean }> = ({ name, age, job }) => {
  return <p>Name: {name} <br /> Age: {age} <br /> Has Job: {job} </p>
}
