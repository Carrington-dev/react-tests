import { useState } from "react";
import classes from "./CreateTodo.module.css"

const CreateTodo: React.FC<{}> = ({}) => {
    const [ title, setTitle ] = useState("")
    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault()
    }
    return (<>
        <form onSubmit={onFormSubmit} className={ classes.form }>
            <label htmlFor="#todoInput">Create Todo</label>
            <input id="todoInput" type="text" onChange={e => setTitle(e.target.value)} />
            <button type="submit" >Add Todo</button>
        </form>
    </>);
}

export default CreateTodo;