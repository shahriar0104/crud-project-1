import React, {createContext, useState} from "react";

export const TodoListContext = createContext([]);

function GlobalContext(props) {
    const [todoList, setTodoList] = useState([]);
    return (
        <TodoListContext.Provider value={[todoList, setTodoList]}>
            {props.children}
        </TodoListContext.Provider>
    )
}

export default GlobalContext;
