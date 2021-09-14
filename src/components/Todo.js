import React, {useContext} from 'react';
import CreateTodo from "./CreateTodo";
import ShowTodo from "./ShowTodo";
import {TodoListContext} from "../context/GlobalContext";
import {actionType} from "../utils/actionType";

const Todo = () => {
    const [state, dispatch] = useContext(TodoListContext);

    const addTodoHandler = (todoState) =>
        dispatch({type: actionType.ADD_TODO, payload: todoState});

    const updateTodoHandler = (todoState, todoIndex) =>
        dispatch({type: actionType.UPDATE_TODO, index: todoIndex, payload: todoState});

    const deleteTodoHandler = (todoIndex) =>
        dispatch({type: actionType.REMOVE_TODO, payload: todoIndex});

    return (
        <div className="App min-h-screen bg-gray-200 p-4 sm:p-8">
            <CreateTodo addTodo={addTodoHandler}/>
            <div className="flex flex-wrap justify-center items-center my-4 mx-8">
                {state.todos.map((todo, index) => {
                    return <ShowTodo
                        key={index} index={index} name={todo.name} email={todo.email} todo={todo.todo}
                        click={() => deleteTodoHandler(index)}
                        update={updateTodoHandler}/>
                })}
            </div>
        </div>
    );
}

export default Todo;
