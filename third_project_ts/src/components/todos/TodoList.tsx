import TodoItem from "./TodoItem";


const TodoList: React.FC<{courseTitles: String[]}> = (props) => {
    return ( <ul>
        { props.courseTitles.map((course) => (
            
            <TodoItem title={course} />
        ))}
    </ul> );
}

export default TodoList;