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
const TodoList: React.FC<{courses: Todo[]}> = (props) => {
    // console.log(props.courses);
    
    return ( <ul className={ classes.todos }>
        { props.courses.map((course, index) => (
            
            <TodoItem key={index}  course={course} />
        ))}
    </ul> );
}

export default TodoList;