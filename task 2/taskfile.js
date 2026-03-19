
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
            newItem.classList.toggle("completed");
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";

        deleteButton.addEventListener("click", function () {
            newItem.remove();
        });
        
        newItem.appendChild(deleteButton);
        newItem.appendChild(checkbox);
        newItem.append(" " + inputValue);

        container.appendChild(newItem);

        inputElement.value = "";
        }   
    }


