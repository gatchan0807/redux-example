export const ADD_TODO = 'ADD_TODO'

export const addTodo = (/* content */ todo) => {
    return {
        type: ADD_TODO,
        content: todo
    }
}