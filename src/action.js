export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (/* content */ todo) => {
    return {
        type: ADD_TODO,
        content: todo
    }
};

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        index: index
    }
};