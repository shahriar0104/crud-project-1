import {Component} from "react";
import './App.css';
import CreateTodo from "./components/CreateTodo";
import ShowTodo from "./components/ShowTodo";

class App extends Component {
    state = {
        todos: [],
    }

    addTodoHandler = (target) => {
        this.setState({
            todos: this.state.todos.concat({
                name: target.name.value,
                email: target.email.value,
                todo: target.todo.value
            })
        });
    }

    updateTodoHandler = (target, todoIndex) => {
        const todos = [...this.state.todos];
        todos[todoIndex] = {name: target.name, email: target.email, todo: target.todo};
        this.setState({todos});
    }

    deleteTodoHandler = (todoIndex) => {
        const todos = [...this.state.todos];
        todos.splice(todoIndex, 1);
        this.setState({todos: todos});
    }

    render() {
        return (
            <div className="App min-h-screen bg-gray-200 p-4 sm:p-8">
                <CreateTodo addTodo={this.addTodoHandler}/>
                <div className="flex flex-wrap justify-center items-center my-4 mx-8">
                    {this.state.todos.map((todo, index) => {
                        return <ShowTodo
                            key={index} index={index} name={todo.name} email={todo.email} todo={todo.todo}
                            click={() => this.deleteTodoHandler(index)}
                            update={this.updateTodoHandler}/>
                    })}
                </div>
            </div>
        );
    }
}

export default App;
