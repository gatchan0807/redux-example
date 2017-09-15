import {addTodo, deleteTodo} from './util'

export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return addTodo(state, action);
        case 'DELETE_TODO':
            return deleteTodo(state, action);
        case 'DELETE_ALL_TODO':
            return {
                currentIndex: 0,
                todoList: []
            };
        // TODO: reducerを分割する
        // case 'CHANGE_INPUT':
        //     return
        default:
            return state
    }
};