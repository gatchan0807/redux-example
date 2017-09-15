import {createStore} from 'redux'
import * as action from './action'
import {todos} from './reducer'
import {convertState2Dom, renderingDomList} from './util'

const initialState = {
    todoList: [],
    currentIndex: 0,
    inputtedText: ''
};

let state;
let todoDomList;
let parent = document.getElementById('todo-list');

// store の作成
let store = createStore(todos, initialState);

const add = () => {
    // todoの追加
    state = store.getState();

    if (state.inputtedText !== undefined && state.inputtedText !== '') {
        store.dispatch(action.addTodo(state.inputtedText));
    }

    state = store.getState();

    while (parent.firstChild) parent.removeChild(parent.firstChild);

    // todoリストの変換・描画
    todoDomList = convertState2Dom(state.todoList);
    renderingDomList(parent, todoDomList);
};

const deleteWithIndex = () => {
    // todoから 1番上のものを削除
    store.dispatch(action.deleteTodo(0));

    state = store.getState();

    // DOMを全部消す
    while (parent.firstChild) parent.removeChild(parent.firstChild);

    // todoリストの変換・描画
    todoDomList = convertState2Dom(state.todoList);
    renderingDomList(parent, todoDomList);
};

const allDelete = () => {
    // todoを全て削除
    store.dispatch(action.deleteAllTodo());

    state = store.getState();

    while (parent.firstChild) parent.removeChild(parent.firstChild);

    todoDomList = convertState2Dom(state.todoList);
    renderingDomList(parent, todoDomList);
};

const getContent = () => {
    let inputtedText = document.querySelector('#todo-content').value;
    store.dispatch(action.changeInput(inputtedText))
};

document.querySelector('#todo-content').addEventListener('input', getContent);

document.querySelector('#todo-form').addEventListener('submit', add);
document.querySelector('#add-button').addEventListener('click', add);
document.querySelector('#done-button').addEventListener('click', deleteWithIndex);
document.querySelector('#done-all-button').addEventListener('click', allDelete);