import {actionType} from "../utils/actionType";

const todoReducer = (state, action) => {
    switch (action.type) {
        case actionType.ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            };
        case actionType.UPDATE_TODO:
            const todos = [...state.todos];
            todos[action.index] = action.payload;
            return {...state, todos};
        case actionType.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload)
            };
        default:
            return state;
    }
};

export default todoReducer;
