import chai from 'chai'
import * as action from '../src/action'

const assert = chai.assert;

describe('アクションをテストする', () => {
    it('ADD_TODOのアクションを返すか', () => {
        const expectedContent = "Testing";
        const expected = {
            type: 'ADD_TODO',
            content: expectedContent
        };

        let actual = action.addTodo(expectedContent);

        assert.deepEqual(actual, expected);
    });

    it('DELETE_TODOのアクションを返すか', () => {
        const expectedIndex = 1;
        const expected = {
            type: 'DELETE_TODO',
            index: expectedIndex
        };

        let actual = action.deleteTodo(expectedIndex);

        assert.deepEqual(actual, expected);
    });

    it('DELETE_ALL_TODOのアクションを返すか', () => {
        const expectedType = 'DELETE_ALL_TODO';

        let actual = action.deleteAllTodo();

        assert.strictEqual(actual.type, expectedType);
    });

    it('CHANGE_INPUTのアクションを返すか', () => {
        const expectedType = 'CHANGE_INPUT';
        const expectedContent = 'first todo';

        let actual = action.changeInput(expectedContent);

        const expected = {
            type: expectedType,
            content: expectedContent
        };

        assert.deepEqual(actual, expected);
    })
});

