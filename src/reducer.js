import {combineReducers} from 'redux'
import {todo} from './reducers/todo'
import {input} from './reducers/input'

export const rootReducer = combineReducers({
    todo,
    input
});