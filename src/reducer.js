import {addTodo, deleteTodo} from './util'

export const todos = (state = [], action) => {
    switch (action.type) {
        // TODO: reducerを分割する
        case 'ADD_TODO':
            return addTodo(state, action);
        case 'DELETE_TODO':
            return deleteTodo(state, action);
        case 'DELETE_ALL_TODO':
            return {
                currentIndex: 0,
                inputtedText: state.inputtedText,
                todoList: []
            };
        case 'CHANGE_INPUT':
            let changed = Object.assign({}, state);
            changed.inputtedText = action.content;
            return changed;
        default:
            return state
    }
};