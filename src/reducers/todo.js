import {addTodo, deleteTodo, initialTodoState} from '../util'

export const todo = (state = initialTodoState, action) => {
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
        default:
            return state
    }
};