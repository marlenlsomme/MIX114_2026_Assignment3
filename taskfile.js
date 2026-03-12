
//Task 2 - To-do list
function addItem() {

    const inputElement = document.getElementById('userInput');
    const inputValue = inputElement.value;

    if (inputValue !=="") {

        const container = document.getElementById('list');
        
        const newItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                newItem.style.textDecoration = "line-through"
            }
            else {
                newItem.style.textDecoration = "none"
            }
        });
        
        newItem.appendChild(checkbox);
        newItem.append(" " + inputValue);
        
        container.appendChild(newItem);

        inputElement.value = "";
        }   
    }


function deleteItem() {
    const element = document.getElementById('elementId');
    if (element) {
        element.remove();
        console.log('Element with id "${elementId}" has been removed from the list.');
    }
}

