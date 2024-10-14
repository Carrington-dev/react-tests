import { useState } from "react";
import classes from "./CreateTodo.module.css"

const CreateTodo: React.FC<{ onCreateTodo: (title: string) => void }> = ({onCreateTodo }) => {
    const [ title, setTitle ] = useState<React.ComponentState>("")
    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if( title !== null || +title.length !== 0 ){
            console.log(title.length);
            onCreateTodo(title || "New Todo")
        }
        else if(title.length === 0){
            alert("Hai wena, enter something")
        }
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