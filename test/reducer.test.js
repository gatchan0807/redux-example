import chai from 'chai'
import {rootReducer} from '../src/reducer'

const assert = chai.assert;

describe('リデューサーをテストする', () => {
    let initialState = {};

    beforeEach(() => {
        initialState = {
            todo: {
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
            },
            input: {
                inputtedText: '',
            }
        }
    });

    it('複数に分割されたstateを返すか', () => {
        let expected = {
            todo: {
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
            },
            input: {
                inputtedText: '',
            }
        };

        let actual = rootReducer(initialState, {type: null});

        assert.deepEqual(actual, expected)
    })
});

describe('TODO関係のリデューサーをテストする', () => {
    let initialState = {};

    beforeEach(() => {
        initialState = {
            todo: {
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
            },
            input: {
                inputtedText: '',
            }
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

        let actual = rootReducer(initialState, action);

        assert.lengthOf(actual.todo.todoList, 3);
        assert.deepEqual(actual.todo.todoList, initialState.todo.todoList);
        assert.deepEqual(actual.todo.todoList[2], expect);
        assert.strictEqual(actual.todo.currentIndex, 2)
    });

    it('DELETE_TODOタイプでデータ削除が出来るか', () => {
        const action = {
            type: 'DELETE_TODO',
            indexes: [0]
        };

        let actual = rootReducer(initialState, action);

        assert.lengthOf(actual.todo.todoList, 1);
        assert.deepEqual(actual.todo[0], initialState[1]);
    });

    it('DELETE_ALL_TODOタイプですべてのデータを削除できるか', () => {
        const action = {
            type: 'DELETE_ALL_TODO'
        };

        let expected = {
            currentIndex: 0,
            todoList: []
        };

        let actual = rootReducer(initialState, action);

        assert.lengthOf(actual.todo.todoList, 0);
        assert.strictEqual(actual.todo.currentIndex, 0);
        assert.deepEqual(actual.todo, expected)
    });
});

describe('INPUT関係のリデューサーをテストする', () => {
    let initialState = {};

    beforeEach(() => {
        initialState = {
            todo: {
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
            },
            input: {
                inputtedText: '',
            }
        }
    });

    it('CHANGE_INPUTタイプでinputの値が書き換わるか', () => {
        let expectedContent = 'first';

        const action = {
            type: 'CHANGE_INPUT',
            content: expectedContent
        };

        let actual = rootReducer(initialState, action);

        assert.strictEqual(actual.input.inputtedText, expectedContent);

        // 値を更新
        expectedContent = 'first todo';
        action.content = expectedContent;

        actual = rootReducer(actual, action);

        // 更新後の値をチェック
        assert.strictEqual(actual.input.inputtedText, expectedContent)
    })
});