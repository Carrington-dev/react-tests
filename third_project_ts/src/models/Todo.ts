import { v4 as uuid4 } from 'uuid';

class Todo {
    id: string
    name: string

    constructor(name: string) {
        this.id = uuid4()
        this.name = name
    }
}

export default Todo