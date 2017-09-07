export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            state.push(action.content)
            return state
        default:
            return state
    }
}