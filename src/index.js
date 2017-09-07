import { createStore } from 'redux'
import { addTodo } from './action'
import { todos } from './reducer'

let store = createStore(todos, [])

store.dispatch(addTodo("Take a picture"))

console.log(store.getState());