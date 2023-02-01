const todoItemsContainer = document.getElementById("todoItemsContainer");
const addTodoButton = document.getElementById("addTodoButton");
const sorting = document.getElementById('menu');


let todoList = [
    {
        text: "HTML",
        uniqueNo: 1,
    },
    {
        text: "CSS",
        uniqueNo: 2,
    },


];

let todosCount = todoList.length;

function onAddTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }

    todosCount = todosCount + 1;

    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount
    };

    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

addTodoButton.onclick = function () {
    onAddTodo();
}

// function onTodoStatusChange(checkboxId, labelId) {
//     let checkboxElement = document.getElementById(checkboxId);
//     let labelElement = document.getElementById(labelId);

//     // labelElement.classList.toggle('checked');
// }

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);

    todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
    let todoId = 'todo' + todo.uniqueNo;
    let checkboxId = 'checkbox' + todo.uniqueNo;
    let labelId = 'label' + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.value = "on";

    // inputElement.onclick = function () {
    //     onTodoStatusChange(checkboxId, labelId);
    // }

    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);


    const select = document.createElement("select");
    labelContainer.appendChild(select);

    const ele0 = document.createElement("option");
    ele0.textContent = "Select Status";
    ele0.value = 'Select Status';
    select.appendChild(ele0);

    const ele1 = document.createElement("option");
    ele1.textContent = "Todo";
    ele1.value = 'Todo';
    select.appendChild(ele1);

    const ele2 = document.createElement("option");
    ele2.textContent = "In-Progress";
    ele2.value = 'In-Progress';
    select.appendChild(ele2);

    const ele3 = document.createElement("option");
    ele3.textContent = "Testing";
    ele3.value = 'Testing';
    select.appendChild(ele3);

    const ele4 = document.createElement("option");
    ele4.textContent = "Completed";
    ele4.value = 'Completed';
    select.appendChild(ele4);

    select.addEventListener("change", function (e) {
        if (e.target.value === "Completed") {
            labelContainer.removeChild(deleteIconContainer);

            labelElement.classList.add('checked');

        }
        else if (e.target.value === "Testing") {
            select.removeChild(ele2);
        } else {
            labelContainer.appendChild(deleteIconContainer);

            select.appendChild(ele2);
            labelElement.classList.remove('checked');
        }
    });

    let editVal = document.createElement('input');
    editVal.type = 'text';
    editVal.classList.add('ml-5', 'mt-1', 'mb-1', 'mr-1');
    labelContainer.append(editVal);
    editVal.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            labelElement.textContent = e.target.value;

            // e.preventDefault();
            editVal.value = "";
        }
    })

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = function () {
        onDeleteTodo(todoId);


    };
    deleteIconContainer.appendChild(deleteIcon);
};



for (let todo of todoList) {
    createAndAppendTodo(todo);
}


sorting.addEventListener("click", function () {

    let selectedOption = sorting.value;
    console.log(selectedOption)

    if (selectedOption === "Ascending") {
        todoList.sort((a, b) => a.text.localeCompare(b.text));
        todoItemsContainer.innerHTML = "";
        for (let todo of todoList) {
            createAndAppendTodo(todo);
        }
    } else if (selectedOption === "Descending") {
        todoList.sort((a, b) => b.text.localeCompare(a.text));
        todoItemsContainer.innerHTML = "";
        for (let todo of todoList) {
            createAndAppendTodo(todo);
        }
    }
});