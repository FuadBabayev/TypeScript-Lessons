import React, { useRef } from 'react'
import TodoClass from '../models/TodoClass';
import style from '../styles/NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (param: string) => void, onRemoveTodo : (param : string) => void, todo : TodoClass[] }> = (props) => { 
    //React.FC<{ onAddTodo: ()=> }> icideki ()=> Function Type demekdir
    // Todo: Since every <input> element, regardless of type, is based on the HTMLInputElement interface (You can also check all html elements interface)
    // Todo: useRef<HTMLInputElement>(null)  bele yazmasaq TypeScript butun ilkin deyerini ve hansi elemente aid olacaqini bilmiyecek
    // * <HTMLInputElement> useRef-in diger elementlere (aid olmaqinin qarsisini alir) deyil sirf input elementine aid olduqunu gostermek ucundur 
    // * (null) we must set default value because (default olaraq ilk once undefined yeni null olur) this Ref could already be sign to some other elements maybe
    // ? Bu linkde butun html elementlerin (tags) type interfaceleri var        https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
    const todoTextInputRef = useRef<HTMLInputElement>(null);        // console.log(todoTextInputRef);    // {current: null}
    
    // ! Form submit olunanda onun deyerlerini oxumaq ucun event parametrinden istifade olunur. Type interface-si React.FormEvent-dir
    // * React.FormEvent => onSubmit, onBlur, onFocus (event)
    // * React.MouseEvent => onClick, onDoubleClick, onMouseEnter (event)
    // * React.KeyboardEvent => onKeyDown, onKeyUp (event)    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // Todo: Question Mark (?) automatically added because the ref is not necessarily set to a value yet and in addition Question Mark signals to TypeScript
        // Todo: that it tries to access value if succeed => entered value will be stored in enteredText but it fails => null will be stored in enteredText 
        // * Qisaca avtomatic olaraq ? isaresini atacaq cunki eger value bos olsa onu null ede bilsin deye (? olmasaydi ve deyer bos olsa Error verecekdi)
        // const enteredText = todoTextInputRef.current?.value;       // ! const enteredText: string | undefined      TypeScript doesnt know value is null or not
           const enteredText = todoTextInputRef.current!.value;       // ! const enteredText: string                  If you sure that there will be a non-null value
        // Todo: Exclamation Mark (!) tells TypeScript this value will never be null 

        if (enteredText.trim().length === 0) return;                  // Inputun ici bos olsa islemeyecek            
        
        console.log(todoTextInputRef, todoTextInputRef.current, todoTextInputRef.current!.value);
        props.onAddTodo(enteredText);    // ! Function propsunu Lift Up ederek buradaki inputun valuesini (enteredText) parent componente argument olaraq gonderdik
        todoTextInputRef.current!.value = "";
    }   

    return (
        <form onSubmit={submitHandler} className={style.form}>
            <label htmlFor="text">Todo text:</label> &nbsp;&nbsp;
            <input type="text" id='text' ref={todoTextInputRef} /> &nbsp;&nbsp;
            <button>Add Todo</button>
            <ol type='1'>{props.todo &&  props.todo.map((act) =>
             <li key={act.id} style={{display : 'flex', justifyContent : 'space-between'}} ><p>{act.text}</p>
              <p onClick={() => props.onRemoveTodo(act.id)} style={{color : 'red'}}>&times;</p></li>)}</ol>
        </form>
    )
} 

export default NewTodo
