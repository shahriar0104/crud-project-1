import React, {useContext} from 'react';
import CreateTodo from "./CreateTodo";
import ShowTodo from "./ShowTodo";
import {TodoListContext} from "../context/GlobalContext";

const Todo = () => {
    const [todoList, setTodoList] = useContext(TodoListContext);

    const addTodoHandler = (event) => {
        setTodoList(todoList.concat({
            name: event.target.name.value,
            email: event.target.email.value,
            todo: event.target.todo.value
        }))
    }

    const updateTodoHandler = (todoState, todoIndex) => {
        const todos = [...todoList];
        todos[todoIndex] = todoState;
        setTodoList(todos);
    }

    const deleteTodoHandler = (todoIndex) => {
        const todos = [...todoList];
        todos.splice(todoIndex, 1);
        setTodoList(todos);
    }

    return (
        <div className="App min-h-screen bg-gray-200 p-4 sm:p-8">
            <CreateTodo addTodo={addTodoHandler}/>
            <div className="flex flex-wrap justify-center items-center my-4 mx-8">
                {todoList.map((todo, index) => {
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
