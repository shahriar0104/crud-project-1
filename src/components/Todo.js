import {useState} from "react";
import CreateTodo from "../components/CreateTodo";
import ShowTodo from "../components/ShowTodo";

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (todoState) => setTodos([...todos, todoState]);

    const updateTodoHandler = (todoState, todoIndex) => {
        const todoList = [...todos];
        todoList[todoIndex] = todoState;
        setTodos(todoList);
    }

    const deleteTodoHandler = (todoIndex) => {
        const todoList = [...todos];
        todoList.splice(todoIndex, 1);
        setTodos(todoList);
    }

    return (
        <div className="min-h-screen bg-gray-200 p-4 sm:p-8">
            <CreateTodo addTodo={addTodoHandler}/>
            <div className="flex flex-wrap justify-center items-center my-4 mx-8">
                {todos.map((todo, index) => {
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
