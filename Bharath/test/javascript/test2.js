const addBtn=document.getElementById("addbtn");
const input=document.getElementById("input");
const todoList=document.getElementById("todolist");
const form=document.getElementById("form");
const sortTodo=document.getElementById("sort");


let todoS=[];
let sortList=[];
let Idnumber=todoS.length;

function createtodoItem(newLIst){
    
    const li =document.createElement("li");
    li.style.listStyleType="none";
    let listId="list"+newLIst.Id;
    li.id=listId;
    todoList.appendChild(li);
    li.classList.add("list-item");

    const div = document.createElement('div');
    li.appendChild(div);
    div.classList.add("todo-item");

    const todoContent = document.createElement("p");
    div.appendChild(todoContent);
    todoContent.textContent=newLIst.textContents;

    const edit = document.createElement("input");
    edit.type= "text";
    edit.placeholder="You can edit the content here.";
    div.appendChild(edit);
    edit.classList.add("editinput")
    edit.addEventListener("keydown",function(event){
        
        if(event.key === "Enter"){
            todoContent.textContent=event.target.value;
            edit.value="";
            event.preventDefault();
        }
        
        
    })

    const select=document.createElement("select");
    let selectID="Select"+newLIst.Id;
    select.id=selectID;
    div.appendChild(select);
    select.classList.add("select-list");
   
    const create0 = document.createElement("option");
    create0.textContent="--Select Status--";
    create0.value="--Select Status--";
    select.appendChild(create0);

    const create1 = document.createElement("option");
    create1.textContent="TODO";
    create1.value="TODO";
    select.appendChild(create1);

    const create2= document.createElement("option");
    create2.textContent="In-Progress";
    create2.value="In-Progress";
    select.appendChild(create2);

    const create3= document.createElement("option");
    create3.textContent="Testing";
    create3.value="Testing";
    select.appendChild(create3);

    const create4= document.createElement("option");
    create4.textContent="Completed";
    create4.value="Completed";
    select.appendChild(create4);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent="DELETE";
    let deleteBtnId ="delete"+newLIst.Id
    deleteBtn.classList.add("delete");
    div.appendChild(deleteBtn);
    deleteBtn.addEventListener("click",function(event){
        event.preventDefault();
        OnclickDelete(listId);
    });
    select.addEventListener("change",function(event){
        if(event.target.value==="Completed"){
            div.removeChild(deleteBtn);
        }
        else if (event.target.value === "Testing") {
            select.removeChild(create2);
            div.appendChild(deleteBtn);
        }
        else if(event.target.value === "TODO" || event.target.value === "In-Progress"   ){
            select.appendChild(create2);
            div.appendChild(deleteBtn);
        }

    });
} 


let uniqueId=1;

function OnclickDelete(listId){
    let todoElement=document.getElementById(listId);
    todoList.removeChild(todoElement);
}

addBtn.addEventListener("click",function(){
    
    let userInput=input.value;
    Idnumber=Idnumber+1;
    let newLIst={
        textContents:userInput,
        Id:Idnumber,
    };
    todoS.push(newLIst);
    if(input.value==="" ){
        alert("Please enter the valid input");
    }
    
    else{
        createtodoItem(newLIst);
    }
    
    sortList.push(userInput);
    input.value="";
}); 

sortTodo.addEventListener("change",function(event){
    if(event.target.value="Asc"){
        
    }
});
sortTodo.addEventListener("click", function () {
    let selectedOption = sortTodo.value;
    if (selectedOption === "Asc") {
      todoS.sort((a, b) => a.textContents.localeCompare(b.textContents));
      todoList.innerHTML = "";
      for (let todo of todoS) {
        createtodoItem(todo);
      }
    } else if (selectedOption === "desc") {
      todoS.sort((a, b) => b.textContents.localeCompare(a.textContents));
      todoList.innerHTML = "";
      for (let todo of todoS) {
        createtodoItem(todo);
      }
    }
  });








