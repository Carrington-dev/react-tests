import { createContext, ReactElement, useState } from "react";
import Todo from "../models/Todo";
import { on } from "stream";

const TodoContext = createContext<{
    todos: Todo[];
    addTodo: (title: string) => void;
    removeTodo: (todo: Todo) => void;
}>({
    todos: [],
    addTodo: (title: string) => {},
    removeTodo: (todo: Todo) => {},

})

const TodoContextProvider: React.FC<{ children: ReactElement[]}> = (props) => {

    const courseTitles: Todo[] = [ 
        new Todo("Introduction to Computer Science"),
      ]
    
      const [todos, setCourseTitles] = useState(courseTitles)
    
      const onCreateTodo = (title: string) => {
        setCourseTitles((prev) => ([ new Todo(title), ...prev]))
      }
      const onRemoveItem = (todo: Todo) => {
        setCourseTitles((prev) => ([ ...prev.filter((item) => item.id !== todo.id )]))
      }
    
    const initialValue =  {
        todos: todos,
        addTodo: onCreateTodo,
        removeTodo: onRemoveItem,
    }
    return (
        <TodoContext.Provider value={ initialValue }>{ props.children }</TodoContext.Provider>
    )
}
export {TodoContext}
export default TodoContextProvider