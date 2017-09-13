import { createStore } from 'redux'
import { addTodo, deleteTodo } from './action'
import { todos } from './reducer'
import { convertState2Dom, renderingDomList } from './util'

// store の作成
let store = createStore(todos, [])
let state = store.getState()

// todo の追加
store.dispatch(addTodo("Study ES6"))
store.dispatch(addTodo("Study redux"))
store.dispatch(addTodo("Study react"))

state = store.getState()

let todoList = document.getElementById('todo-list')

// todoリストの変換・描画
let todoDomList = convertState2Dom(state)
renderingDomList(todoList, todoDomList)

// todo から 1 番目のものを削除
store.dispatch(deleteTodo(1))

state = store.getState()

// DOMを全部消す
while (todoList.firstChild) todoList.removeChild(todoList.firstChild);

// todoリストの変換・描画
todoDomList = convertState2Dom(state)
renderingDomList(todoList, todoDomList)