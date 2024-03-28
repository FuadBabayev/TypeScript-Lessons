import React, { useContext, useRef } from 'react';
import { PostContext } from '../store/TodosContext';
import style from "./modules/NewTodo.module.css"

const NewTodo: React.FC = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const todoContext = useContext(PostContext);                   // console.log(todoContext);            {items: Array(0), onAddTodo: ƒ, onRemoveTodo: ƒ}

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0) return;
        todoContext.onAddTodo(enteredText);
        todoTextInputRef.current!.value = "";
    }

    return (
        <form onSubmit={submitHandler} className={style.form}>
            <label htmlFor="text">Todo text:</label> &nbsp;&nbsp;
            <input type="text" id='text' ref={todoTextInputRef} /> &nbsp;&nbsp;
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo
