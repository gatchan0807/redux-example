export const convertState2Dom = (/*Array*/ state) => {
    return state.map(element => {
        let domElement = document.createElement('li');
        domElement.className = 'todo-item';
        domElement.innerHTML = element.content;

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('value', element.index);
        checkbox.setAttribute('class', 'todo-item-checkbox');

        domElement.appendChild(checkbox);
        return domElement
    })
};

export const renderingDomList = (parent, domList) => {
    domList.forEach(function (element) {
        parent.appendChild(element);
    }, this);
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