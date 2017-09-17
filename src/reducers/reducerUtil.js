export const addTodo = (state, action) => {
    let added = Object.assign({}, state);

    added.currentIndex++;

    added.todoList.push({
        index: added.currentIndex,
        content: action.content
    });

    return added
};

export const deleteTodo = (state, action) => {
    let copiedState = Object.assign([], state);

    action.indexes.forEach(element => {
        copiedState.todoList = removeWithIndex(copiedState.todoList, element);
    });

    return copiedState;
};

export const removeWithIndex = (sourceArray, _index) => {
    // breakを使うためにfor記法を使用。
    for (let i = 0; i < sourceArray.length; i++) {
        if (_index === sourceArray[i].index) {
            sourceArray.splice(i, 1);
            break;
        }
    }
    return sourceArray;
};