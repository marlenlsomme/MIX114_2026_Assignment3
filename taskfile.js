//Task 1. a
function splitLines(text) {
    return text.split("\n")
}

//Task 2 - To-do list
function addItem() {
    const inputElement = document.getElementById('userInput');
    const inputValue = inputElement.value;

    if (inputValue !=="") {
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        const newItem = document.createElement('li');
        newItem.textContent = inputValue;

        const container = document.getElementById('list');
        container.appendChild(newItem);

        inputElement.value = "";
    }
}

//legg inn addeventlistener for checked/unchecked//

function deleteItem() {
    const element = document.getElementById('elementId');
    if (element) {
        element.remove();
        console.log('Element with id "${elementId}" has been removed from the list.');
    }
}

