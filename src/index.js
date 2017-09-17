import {createStore} from 'redux'
import * as action from './action'
import {rootReducer} from './reducer'
import {convertState2Dom, renderingDomList} from './renderingUtil'

// store の作成
let store = createStore(rootReducer);

const addTodo = () => {
    // todoの追加
    let state = store.getState();

    if (state.input.inputtedText !== undefined && state.input.inputtedText !== '') {
        store.dispatch(action.addTodo(state.input.inputtedText));
    }

    state = store.getState();

    let parent = document.getElementById('todo-list');
    while (parent.firstChild) parent.removeChild(parent.firstChild);

    // todoリストの変換・描画
    let todoDomList = convertState2Dom(state.todo.todoList);
    renderingDomList(parent, todoDomList);
};

const deleteTodoWithIndex = () => {
    let checkedBoxList = document.querySelectorAll('#todo-list input:checked');
    let selectedTodoList = Array.prototype.map.call(checkedBoxList, element => {
        return element.value / 1
    });

    store.dispatch(action.deleteTodo(selectedTodoList));

    let state = store.getState();

    // DOMを全部消す
    let parent = document.getElementById('todo-list');
    while (parent.firstChild) parent.removeChild(parent.firstChild);

    // todoリストの変換・描画
    let todoDomList = convertState2Dom(state.todo.todoList);
    renderingDomList(parent, todoDomList);
};

const allTodoDelete = () => {
    // todoを全て削除
    store.dispatch(action.deleteAllTodo());

    let state = store.getState();

    let parent = document.getElementById('todo-list');
    while (parent.firstChild) parent.removeChild(parent.firstChild);

    let todoDomList = convertState2Dom(state.todo.todoList);
    renderingDomList(parent, todoDomList);
};

const getContent = () => {
    let inputtedText = document.querySelector('#todo-content').value;
    store.dispatch(action.changeInput(inputtedText))
};

document.querySelector('#todo-content').addEventListener('input', getContent);

document.querySelector('#todo-form').addEventListener('submit', addTodo);
document.querySelector('#add-button').addEventListener('click', addTodo);
document.querySelector('#done-button').addEventListener('click', deleteTodoWithIndex);
document.querySelector('#done-all-button').addEventListener('click', allTodoDelete);