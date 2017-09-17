export const convertState2Dom = state => {
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