const wholeClock = document.querySelector("#wholeClock");
const clock = document.querySelector("#clock");
const am = document.querySelector("#AM");
const pm = document.querySelector("#PM");

function getClock() {
    const date = new Date();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const curHour = date.getHours();
    if (curHour >= 18 || curHour < 6) { // 오후 6시 ~ 새벽 5시
        if (curHour === 0) {
            const hours = String(curHour + 12).padStart(2, "0");
            clock.innerText = `${hours}:${minutes}`;
            am.classList.remove("hidden");
            pm.classList.add("hidden");

        }
        else if (curHour >= 18) {
            const hours = String(curHour - 12).padStart(2, "0");
            clock.innerText = `${hours}:${minutes}`;
            pm.classList.remove("hidden");
            am.classList.add("hidden");
        }
        else {
            const hours = String(curHour).padStart(2, "0");
            clock.innerText = `${hours}:${minutes}`;
            am.classList.remove("hidden");
            pm.classList.add("hidden");
        }
    }
    else { // 새벽 6시 ~ 오후 5시
        if (curHour === 12) {
            const hours = String(curHour).padStart(2, "0");
            clock.innerText = `${hours}:${minutes}`;
            pm.classList.remove("hidden");
            am.classList.add("hidden");
        }
        else if (curHour > 12) {
            const hours = String(curHour - 12).padStart(2, "0");
            clock.innerText = `${hours}:${minutes}`;
            pm.classList.remove("hidden");
            am.classList.add("hidden");
        }
        else {
            const hours = String(curHour).padStart(2, "0");
            clock.innerText = `${hours}:${minutes}`;
            am.classList.remove("hidden");
            pm.classList.add("hidden");
        }
    }

}

getClock();
setInterval(getClock, 1000);

// console.log(clock.innerText.substring(0, 2));
