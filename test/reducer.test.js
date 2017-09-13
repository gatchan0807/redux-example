import chai from 'chai'
const assert = chai.assert;
import { todos } from '../src/reducer'

describe('リデューサーをテストする', () => {
    let initialArray = [];

    beforeEach(() => {
        initialArray = ['first todo']
    });

    it('ADD_TODOタイプでデータ追加を出来るか', () => {
        const firstContent = initialArray[0];
        const secondContent = 'second todo';
        const action = {
            type: 'ADD_TODO',
            content: secondContent
        };

        let actual = todos(initialArray, action);

        assert.equal(actual.length, 2);
        assert.equal(actual[0], firstContent);
        assert.equal(actual[1], secondContent)
    });

    it('DELETE_TODOタイプでデータ削除が出来るか', () => {
        const action = {
            type: 'DELETE_TODO',
            index: 0
        };

        let actual = todos(initialArray, action);

        assert.equal(actual.length, 0)
    })
});