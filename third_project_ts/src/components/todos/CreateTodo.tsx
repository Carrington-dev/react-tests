import { useState } from "react";
import classes from "./CreateTodo.module.css"

const CreateTodo: React.FC<{ onCreateTodo: (title: String) => void }> = ({onCreateTodo }) => {
    const [ title, setTitle ] = useState("")
    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        onCreateTodo(title)
    }
    return (<>
        <form onSubmit={onFormSubmit} className={ classes.form }>
            <label htmlFor="todoInput">Create Todo</label>
            <input id="todoInput" type="text" onChange={e => setTitle(e.target.value)} />
            <button type="submit" >Add Todo</button>
        </form>
    </>);
}

export default CreateTodo;