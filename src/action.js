export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ALL_TODO = 'DELETE_ALL_TODO';
// export const CHANGE_INPUT = 'CHANGE_INPUT';

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

export const deleteAllTodo = () => {
    return {
        type: DELETE_ALL_TODO
    }
};

// export const changeInput = (value) => {
//     return {
//         type: CHANGE_INPUT,
//         value: value
//     }
// };