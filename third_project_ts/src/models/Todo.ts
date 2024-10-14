import { v4 as uuid4 } from 'uuid';

class Todo {
    id: String
    name: String

    constructor(name: String) {
        this.id = uuid4()
        this.name = name
    }
}

export default Todo