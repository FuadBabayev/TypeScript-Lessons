import style from './modules/Todo.module.css';

const Todo: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {

    return (
        <li className={style.item} onClick={props.onRemoveTodo}>
            {props.text} asdasda
        </li>
    );
};

export default Todo;