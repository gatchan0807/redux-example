import chai from 'chai'
const assert = chai.assert;
import { todos } from '../src/reducer'

describe('リデューサーをテストする', () => {
    let initialArray = [];

    beforeEach(() => {
        initialArray = ['first todo', 'second todo']
    });

    it('ADD_TODOタイプでデータ追加を出来るか', () => {
        const firstContent = initialArray[0];
        const secondContent = initialArray[1];
        const thirdContent = 'third todo';
        const action = {
            type: 'ADD_TODO',
            content: thirdContent
        };

        let actual = todos(initialArray, action);

        assert.strictEqual(actual.length, 3);
        assert.strictEqual(actual[0], firstContent);
        assert.strictEqual(actual[1], secondContent);
        assert.strictEqual(actual[2], thirdContent)
    });

    it('DELETE_TODOタイプでデータ削除が出来るか', () => {
        const action = {
            type: 'DELETE_TODO',
            index: 0
        };

        let actual = todos(initialArray, action);

        assert.strictEqual(actual.length, 1)
    });

    it('DELETE_ALL_TODOタイプですべてのデータを削除できるか', () => {
        const action = {
            type: 'DELETE_ALL_TODO'
        };

        let actual = todos(initialArray, action);

        assert.strictEqual(actual.length, 0);
    })
});