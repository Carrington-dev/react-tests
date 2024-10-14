import Todo from "../../models/Todo";
import classes from "./TodoItem.module.css"

const TodoItem: React.FC<{course: Todo}> = (props) => {
    return ( <li className={ classes.item }>{ props.course.name }</li> );
}

export default TodoItem;