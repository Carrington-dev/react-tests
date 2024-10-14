import Todo from "../../models/Todo";

const TodoItem: React.FC<{course: Todo}> = (props) => {
    return ( <li>{ props.course.name }</li> );
}

export default TodoItem;