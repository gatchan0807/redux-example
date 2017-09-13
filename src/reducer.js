export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            state.push(action.content);
            return state;
        case 'DELETE_TODO':
            state.splice(action.index, 1);
            return state;
        default:
            return state
    }
};