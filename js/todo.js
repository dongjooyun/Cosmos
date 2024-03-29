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

    swal({
        // title: "Are you sure?",
        text: "Are you sure deleting this ToDo?",
        icon: "warning",
        buttons: ["NO", "YES"],
        // dangerMode: true,
    }).then(willDelete => {
        if (willDelete) {
            li.remove();
            toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
            saveToDos();
            swal({
                // title: "Deleted!",
                text: "The ToDo just deleted.",
                icon: "success",
                buttons: false,
                timer: 1500
            });
        }
        else {
            swal({
                text: "The todo is safe!",
                icon: "info",
                buttons: false,
                timer: 1500
            });
        }
    });
    // addArchives(toDo);
    // saveArchives();
}

function todoChecked(event) {
    const btn = event.target;
    const txt = event.target.nextElementSibling;
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

    const checkBox = document.createElement("i");
    checkBox.classList.add("fa-regular", "fa-square");

    const deleteX = document.createElement("i");
    deleteX.classList.add("fa-solid", "fa-xmark");

    checkBox.addEventListener("click", toggleCheck);
    deleteX.addEventListener("click", deleteToDo);
    li.appendChild(checkBox);
    li.appendChild(deleteX);
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
    if (toDos.length < 8) {
        toDos.push(newToDoObj);
        paintToDo(newToDoObj);
        saveToDos();
    }
    else {
        swal({
            text: "Sorry, maximum ToDo length is 8.",
            icon: "error",
            buttons: false,
            timer: 2000
        });
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}