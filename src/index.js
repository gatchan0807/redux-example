import { createStore } from 'redux'
import { addTodo, deleteTodo } from './action'
import { todos } from './reducer'

// store の作成
let store = createStore(todos, [])

// todo の追加
store.dispatch(addTodo("Study ES6"))
store.dispatch(addTodo("Study redux"))
store.dispatch(addTodo("Study react"))

// todoリストの確認
console.log(store.getState());

// todo から 1 番目のものを削除
store.dispatch(deleteTodo(1))

// todoリストの確認
console.log(store.getState());