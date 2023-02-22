const taskInput = document.getElementById("new-task")! as HTMLInputElement; //new-task
const addButton = document.getElementsByTagName("button")[0]! as HTMLButtonElement; //first button
const incompleteTasksHolder = document.getElementById("incomplete-tasks")! as HTMLElement; //incomplete-tasks
const completedTasksHolder = document.getElementById("completed-tasks")! as HTMLElement; //completed-tasks
const inprogress = document.getElementById("test")! as HTMLElement;
// const test1 = document.getElementById("testing")! as HTMLElement;

//New Task List Item
const createNewTaskElement = function (task:string) {
    //Create List Item
    const listItem = document.createElement("li");
    //input (checkbox)
    const checkBox = document.createElement("input"); // checkbox
    //label
    const label = document.createElement("label");

    //input (text)
    const editInput = document.createElement("input"); // text
    //button.edit
    const editButton = document.createElement("button");
    //button.delete
    const deleteButton = document.createElement("button");
    //Each element modifying
    checkBox.type = "checkbox";
    editInput.type = "text";
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    label.innerText = task;
    //Each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
};
//Add a new task
const addTask = function () {
    console.log("Add task...");
    //Create a new list item with the text from #new-task:
    const listItem = createNewTaskElement(taskInput.value);
    //Append listItem to incompleteTasksHolder
    incompleteTasksHolder.appendChild(listItem);
    // inprogress.appendChild(listItem);
    bindTaskEvents(listItem,taskIncomplete);
    bindTaskEvents(listItem,inprogress)
    bindTaskEvents(listItem, taskCompleted);

    
    taskInput.value = "";
};

//Edit an existing task
const editTask = function (type:string) {
    console.log("Edit task...");
    const listItem = this.parentNode;
    const editInput = listItem.querySelector("input[type=text");
    const label = listItem.querySelector("label");
    const containsClass = listItem.classList.contains("editMode");
    //if the class of the parent is .editMode
    if (containsClass) {
        //Switch from .editMode
        //label text become the input's value
        label.innerText = editInput.value;
    }
    else {
        //Switch to .editMode
        //input value becomes the label's text
        editInput.value = label.innerText;
    }



    //Toggle .editMode on the list item
    listItem.classList.toggle("editMode");
};



//Delete an existing task
const deleteTask = function () {
    console.log("Delete task...");
    const listItem = this.parentNode;
    const ul = listItem.parentNode;
    //Remove the parent list item from the ul
    ul.removeChild(listItem);
};



//Mark a task as complete
const taskCompleted = ()=>{
    console.log("Task complete...");
    //Append the task list item to the #completed-tasks
    const listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
};


//Mark a task as incomplete

const taskIncomplete=(()=>
{
    console.log("Task incomplete...");
//Append the task list item to the #incomplete-tasks
const listItem =this.parentNode;
incompleteTasksHolder.appendChild(listItem)! as HTMLElement;
bindTaskEvents(listItem, taskIncomplete)
});
    
//mark a task as inprogress
const progress=function(this:any){
    console.log('inprogress');
    const listItem=this.parentNode;
    inprogress.appendChild(listItem)! as HTMLElement;
    bindTaskEvents(listItem,progress);

};

const bindTaskEvents =(taskListItem:any, checkBoxEventHandler:any) =>{
    console.log("Bind list item events");
    //select taskListItem's children
    const checkBox = taskListItem.querySelector("input[type=checkbox]");
    const editButton = taskListItem.querySelector("button.edit");
    const deleteButton = taskListItem.querySelector("button.delete");
    //bind editTask to edit button
    editButton.onclick = editTask;
    //bind delete Task to delete button
    deleteButton.onclick = deleteTask;
    //bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
};



//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
                
