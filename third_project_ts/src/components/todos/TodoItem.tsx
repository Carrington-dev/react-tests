const TodoItem: React.FC<{title: String}> = (props) => {
    return ( <li>{ props.title }</li> );
}

export default TodoItem;