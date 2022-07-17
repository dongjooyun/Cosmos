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
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    // addArchives(toDo);
    // saveArchives();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.type = "checkbox";
    span.innerText = `${newToDo.text}`;
    span.classList.add("ml-3");
    const button = document.createElement("button");
    button.innerText = "✔";
    button.type = "button";
    button.classList.add("btn", "btn-light", "border-0", "btn-lg", "shadow-sm");
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
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
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}