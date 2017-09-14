import { removeWithIndex } from './util'

export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat(action.content);
        case 'DELETE_TODO':
            let copiedState = Object.assign([], state);
            return removeWithIndex(copiedState, action.index);
        case 'DELETE_ALL_TODO':
            return [];
        // TODO: reducerを分割する
        // case 'CHANGE_INPUT':
        //     return
        default:
            return state
    }
};