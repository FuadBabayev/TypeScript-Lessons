import React, { useState } from 'react';
import TodoClass from '../models/TodoClass';
import NewTodo from '../components/NewTodo';
import Todos from '../components/Todos';

// ! We create type Alias becase we will use it many times
type TodoContextAlias = {
    items: TodoClass[],
    onAddTodo: (text: string) => void,
    onRemoveTodo: (id: string) => void
};


// ! Step 1: Create a new CONTEXT component (and export it in order to import in another components with useContext)
// Todo: Istifade edeceiyimiz datalari (konkret funksiyalari) evvelceden burada teyin edirik
export const PostContext = React.createContext<TodoContextAlias>({
    items: [],
    onAddTodo: () => { },
    onRemoveTodo: () => { }
});

const TodoContext: React.FC = () => {
    const [todo, setTodo] = useState<TodoClass[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new TodoClass(todoText);
        setTodo((prevTodo) => [...prevTodo, newTodo]);
    }

    const removeTodoHandler = (deletedId: string) => {
        setTodo((delet) => delet.filter((remain) => remain.id !== deletedId))
    }

    // ! Burada hamisini umumilesdirib Step2 ucun value yaradiriq
    const contextValue: TodoContextAlias = {
        items: todo,
        onAddTodo: addTodoHandler,
        onRemoveTodo: removeTodoHandler,
    }

    return (
        // ! Step 2: PROVIDE VALUE to child components
        <PostContext.Provider value={contextValue}>
            <NewTodo />
            <Todos />
        </PostContext.Provider>
    )
}

export default TodoContext