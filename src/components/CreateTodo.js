import React, {useState} from "react";
import TodoFormFields from "./TodoFormFields";

const CreateTodo = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [todo, setTodo] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const todoChangeHandler = (event) => {
        setTodo(event.target.value);
    }

    const onTrigger = (event) => {
        props.addTodo(event.target);
        event.preventDefault();
        setName('');
        setEmail('');
        setTodo('');
    }

    return (
        <div className="w-full sm:w-8/12 md:w-6/12 m-auto">

            <TodoFormFields title='Add a Todo' name={name} email={email} todo={todo}
                            nameChange={nameChangeHandler} emailChange={emailChangeHandler} todoChange={todoChangeHandler}
                            trigger={onTrigger} isCancelPresent={false}/>

        </div>
    )
}

export default CreateTodo;
