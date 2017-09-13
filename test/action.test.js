import chai from 'chai'
const assert = chai.assert;
import * as action from '../src/action'

describe('アクションをテストする', () => {
    it('ADD_TODOのアクションを返すか', () => {
        const expectedContent = "Testing";
        const expectedType = 'ADD_TODO';

        let actual = action.addTodo(expectedContent);

        assert.strictEqual(actual.type, expectedType);
        assert.strictEqual(actual.content, expectedContent)
    });

    it('DELETE_TODOのアクションを返すか', () => {
        const expectedIndex = 1;
        const expectedType = 'DELETE_TODO';

        let actual = action.deleteTodo(expectedIndex);

        assert.strictEqual(actual.type, expectedType);
        assert.strictEqual(actual.index, expectedIndex)
    });

    it('DELETE_ALL_TODOのアクションを返すか', () => {
        const expectedType = 'DELETE_ALL_TODO';

        let actual = action.deleteAllTodo();

        assert.strictEqual(actual.type, expectedType);
    })
});

