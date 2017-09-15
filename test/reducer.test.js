import chai from 'chai'
import {todos} from '../src/reducer'

const assert = chai.assert;

describe('リデューサーをテストする', () => {
    let initialState = {};

    beforeEach(() => {
        initialState = {
            currentIndex: 1,
            todoList: [
                {
                    index: 0,
                    content: 'first todo'
                },
                {
                    index: 1,
                    content: 'second todo'
                }
            ]
        }
    });

    it('ADD_TODOタイプでデータ追加を出来るか', () => {
        const thirdContent = 'third todo';
        const action = {
            type: 'ADD_TODO',
            content: thirdContent
        };

        const expect = {
            index: 2,
            content: thirdContent
        };

        let actual = todos(initialState, action);

        assert.lengthOf(actual.todoList, 3);
        assert.deepEqual(actual.todoList, initialState.todoList);
        assert.deepEqual(actual.todoList[2], expect);
        assert.strictEqual(actual.currentIndex, 2)
    });

    it('DELETE_TODOタイプでデータ削除が出来るか', () => {
        const action = {
            type: 'DELETE_TODO',
            index: 0
        };

        let actual = todos(initialState, action);

        assert.lengthOf(actual.todoList, 1);
        assert.deepEqual(actual[0], initialState[1]);
        assert.strictEqual(actual.currentIndex, 0)
    });

    it('DELETE_ALL_TODOタイプですべてのデータを削除できるか', () => {
        const action = {
            type: 'DELETE_ALL_TODO'
        };

        let actual = todos(initialState, action);

        assert.lengthOf(actual.todoList, 0);
        assert.strictEqual(actual.currentIndex, 0);
    })
});