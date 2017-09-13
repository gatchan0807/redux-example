export const convertState2Dom = (/*Array*/ state) => {
    return state.map(element => {
        let domElement = document.createElement('li');
        domElement.className = 'todo-item';
        domElement.innerHTML = element;
        return domElement
    })
};

export const renderingDomList = (parent, domList) => {
    domList.forEach(function (element) {
        parent.appendChild(element);
    }, this);
};