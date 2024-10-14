import Todo from "../../models/Todo";
import TodoItem from "./TodoItem";

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
    console.log(props.courses);
    
    return ( <ul>
        { props.courses.map((course) => (
            
            <TodoItem  course={course} />
        ))}
    </ul> );
}

export default TodoList;