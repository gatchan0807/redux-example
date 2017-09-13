import { createStore } from 'redux'
import * as action from './action'
import { todos } from './reducer'
import { convertState2Dom, renderingDomList } from './util'

// store の作成
let store = createStore(todos, []);
let state;

// todoの追加
store.dispatch(action.addTodo("Study ES6"));
store.dispatch(action.addTodo("Study redux"));
store.dispatch(action.addTodo("Study react"));

state = store.getState();

let parent = document.getElementById('todo-list');

// todoリストの変換・描画
let todoDomList = convertState2Dom(state);
renderingDomList(parent, todoDomList);

// todoから 1 番目のものを削除
store.dispatch(action.deleteTodo(1));

state = store.getState();

// DOMを全部消す
while (parent.firstChild) parent.removeChild(parent.firstChild);

// todoリストの変換・描画
todoDomList = convertState2Dom(state);
renderingDomList(parent, todoDomList);

// todoを全て削除
store.dispatch(action.deleteAllTodo());

state = store.getState();

while (parent.firstChild) parent.removeChild(parent.firstChild);

todoDomList = convertState2Dom(state);
renderingDomList(parent, todoDomList);