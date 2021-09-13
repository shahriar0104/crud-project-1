import {useState} from "react";
import CreateTodo from "../components/CreateTodo";
import ShowTodo from "../components/ShowTodo";

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (event) => {
        setTodos([...todos, {
            name: event.target.name.value,
            email: event.target.email.value,
            todo: event.target.todo.value
        }]);
    }

    const updateTodoHandler = (target, todoIndex) => {
        const todoList = [...todos];
        todoList[todoIndex] = {name: target.name, email: target.email, todo: target.todo};
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
