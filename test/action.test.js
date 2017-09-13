import chai from 'chai'
const assert = chai.assert;
import { addTodo, deleteTodo } from '../src/action'

describe('アクションをテストする', () => {
    it('ADD_TODOのアクションを返すか', () => {
        const expectedContent = "Testing";
        const expectedType = 'ADD_TODO';

        let actual = addTodo(expectedContent);

        assert.equal(actual.type, expectedType);
        assert.equal(actual.content, expectedContent)
    });

    it('DELETE_TODOのアクションを返すか', () => {
        const expectedIndex = 1;
        const expectedType = 'DELETE_TODO';

        let actual = deleteTodo(expectedIndex);

        assert.equal(actual.type, expectedType);
        assert.equal(actual.index, expectedIndex)
    })
});

