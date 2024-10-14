import Todo from "../../models/Todo";
import classes from "./TodoItem.module.css"

const TodoItem: React.FC<{todo: Todo, onRemoveItem: () => void}> = (props) => {
    const onRemoveTodo = () => {

    }
    return ( <li className={ classes.item } onClick={onRemoveTodo}>{ props.todo.name }</li> );
}

export default TodoItem;