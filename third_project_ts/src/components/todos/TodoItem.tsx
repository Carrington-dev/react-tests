import Todo from "../../models/Todo";
import classes from "./TodoItem.module.css"

const TodoItem: React.FC<{todo: Todo, onRemoveItem: (todo: Todo) => void}> = (props) => {
    
    return ( <li className={ classes.item } onClick={(e) => props.onRemoveItem(props.todo)}>{ props.todo.name }</li> );
}

export default TodoItem;