//Task 1. a
function splitLines(text) {
    return text.split("\n")
}

//Task 2 - To-do list
function addItem() {
<<<<<<< HEAD

=======
>>>>>>> 64868d0263cf8dbf9c3257fccb59e767a4b182e7
    const inputElement = document.getElementById('userInput');
    const inputValue = inputElement.value;

    if (inputValue !=="") {
<<<<<<< HEAD

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
=======
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
>>>>>>> 64868d0263cf8dbf9c3257fccb59e767a4b182e7

function deleteItem() {
    const element = document.getElementById('elementId');
    if (element) {
        element.remove();
        console.log('Element with id "${elementId}" has been removed from the list.');
    }
}

