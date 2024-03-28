import React, { useContext } from 'react';
import { PostContext } from '../store/TodosContext';
import style from './modules/Todos.module.css';
import Todo from "./Todo"

const Todos: React.FC = () => {
    const todoContext = useContext(PostContext);                   // console.log(todoContext);            {items: Array(0), onAddTodo: ƒ, onRemoveTodo: ƒ}

    return (
        <ul className={style.todos} >
            {todoContext.items.map((item) => (
                <Todo key={item.id} text={item.text} onRemoveTodo={todoContext.onRemoveTodo.bind(null, item.id)} />
            ))}
        </ul>
    );
};

export default Todos;