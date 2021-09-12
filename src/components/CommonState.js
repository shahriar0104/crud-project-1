import {useState} from "react";

const CommonState = (props) => {
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [todo, setTodo] = useState(props.todo);

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const todoChangeHandler = (event) => {
        setTodo(event.target.value);
    }

    return {name, setName, email, setEmail, todo, setTodo, nameChangeHandler, emailChangeHandler, todoChangeHandler};
}

export default CommonState;