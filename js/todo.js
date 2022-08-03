const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// === document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const ARCHIVES_KEY = "archives";

let toDos = [];
let archiveArr = [];

function addArchives(newArch) {
    archiveArr.push(newArch);
}

function saveArchives() {
    localStorage.setItem(ARCHIVES_KEY, JSON.stringify(archiveArr));
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const deleteConfirmMsg = "Are you sure deleting this todo?"
    const li = event.target.parentElement;
    if (confirm(deleteConfirmMsg)) {
        li.remove();
        toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
        saveToDos();
    }
    else {
        // Do nothing
    }
    // addArchives(toDo);
    // saveArchives();
}

function todoChecked(event) {
    const btn = event.target;
    const txt = event.target.nextElementSibling;
    console.log(event.target.nextElementSibling);
    btn.classList.remove("fa-regular", "fa-square");
    btn.classList.add("fa-regular", "fa-square-check");
    txt.classList.add("text-decoration-line-through");
}

function todoUnchecked(event) {
    const btn = event.target;
    btn.classList.remove("fa-regular", "fa-square-check", "text-decoration-line-through");
    btn.classList.add("fa-regular", "fa-square");
}

function toggleCheck(event) {
    const btn = event.target;
    if (btn.classList[1] === "fa-square") {
        todoChecked(event);
    }
    else {
        todoUnchecked(event);
    }
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.type = "checkbox";
    span.innerText = `${newToDo.text}`;
    span.classList.add("ml-3");
    const btn = document.createElement("i");
    btn.classList.add("fa-regular", "fa-square");
    // btn.addEventListener("click", deleteToDo);
    btn.addEventListener("click", toggleCheck);
    li.appendChild(btn);
    // const button = document.createElement("button");
    // button.innerText = "✔";
    // button.type = "button";
    // button.id = "checkbox";
    // button.classList.add("btn", "btn-light", "btn-sm", "border-0");
    // button.addEventListener("click", deleteToDo);
    // li.appendChild(button);
    li.appendChild(span);
    li.classList.add("mb-3");

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    if (toDos.length < 9) {
        toDos.push(newToDoObj);
        paintToDo(newToDoObj);
        saveToDos();
    }
    else {
        alert("Sorry, maximum ToDos are 9.");
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}