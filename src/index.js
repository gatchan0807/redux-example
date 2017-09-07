import { createStore } from 'redux'
import { addTodo, deleteTodo } from './action'
import { todos } from './reducer'

let store = createStore(todos, [])

store.dispatch(addTodo("Study ES6"))
store.dispatch(addTodo("Study redux"))
store.dispatch(addTodo("Study react"))

console.log(store.getState());

store.dispatch(deleteTodo(1))

console.log(store.getState());