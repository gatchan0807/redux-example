export const convertState2Dom = (/*Array*/ state) => {
    return state.map(element => {
        let domElement = document.createElement('li');
        domElement.className = 'todo-item';
        domElement.innerHTML = element.content;

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('value', element.index);

        domElement.appendChild(checkbox);
        return domElement
    })
};

export const renderingDomList = (parent, domList) => {
    domList.forEach(function (element) {
        parent.appendChild(element);
    }, this);
};

export const removeWithIndex = (sourceArray, index) => {
    sourceArray.splice(index, 1);
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

    copiedState.currentIndex--;

    copiedState.todoList = removeWithIndex(copiedState.todoList, action.index);

    return copiedState;
};