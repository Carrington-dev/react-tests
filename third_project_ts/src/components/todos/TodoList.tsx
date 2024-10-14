import Todo from "../../models/Todo";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css"

/*
const TodoList: React.FC<{courseTitles: String[]}> = (props) => {
    return ( <ul>
        { props.courseTitles.map((course) => (
            
            <TodoItem title={course} key={course} />
        ))}
    </ul> );
}
*/
const TodoList: React.FC<{todos: Todo[], onRemoveItem: (todo: Todo) => void}> = (props) => {
    
    return ( <ul className={ classes.todos }>
        { props.todos.map((todo, index) => (
            
            <TodoItem key={index}  todo={todo} onRemoveItem={ props.onRemoveItem } />
        ))}
    </ul> );
}

export default TodoList;