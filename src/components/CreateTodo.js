import React from "react";
import TodoFormFields from "./TodoFormFields";
import CommonState from "./CommonState";

const CreateTodo = (props) => {
    const commonState = CommonState({name: '', email: '', todo: ''});

    const onTrigger = (event) => {
        props.addTodo(event.target);
        event.preventDefault();
        commonState.setName('');
        commonState.setEmail('');
        commonState.setTodo('');
    }

    return (
        <div className="w-full sm:w-8/12 md:w-6/12 m-auto">

            <TodoFormFields title='Add a Todo' name={commonState.name} email={commonState.email} todo={commonState.todo}
                            nameChange={commonState.nameChangeHandler} emailChange={commonState.emailChangeHandler} todoChange={commonState.todoChangeHandler}
                            trigger={onTrigger} isCancelPresent={false}/>

        </div>
    )
}

export default CreateTodo;
