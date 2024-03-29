const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const emojis = [
    "😎", "😊", "👻", "🤩", "🤗", "👩‍💻", "👨‍💻"
];

const comments = [
    "Hope you had a nice day,",
    "Have a great week,",
    "Every day is a gift,",
    "Keep going your way,",
    "Spread your wings,",
    "You can totally do this,",
    "Happy weekend,",
];

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function changeGreeting(todayComment, username) {
    const chosenEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    greeting.innerText = `${todayComment} ${username} ${chosenEmoji}`;
}

function paintGreetings(username) {
    const date = new Date();
    const todayComment = comments[date.getDay()];
    changeGreeting(todayComment, username);
    setInterval(changeGreeting, 600000, todayComment, username); // update every 10 minutes
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}