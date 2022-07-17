const wholeClock = document.querySelector("#wholeClock");
const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const curHour = date.getHours();
    if (curHour >= 18 || curHour < 6) { // 오후 6시 ~ 새벽 5시
        if (curHour === 0) {
            const hours = String(curHour + 12).padStart(2, "0");
            clock.innerText = `${hours}:${minutes}`;
        }
        else if (curHour >= 18) {
            const hours = String(curHour - 12).padStart(2, "0");
            clock.innerText = `${hours}:${minutes}`;
        }
        else {
            const hours = String(curHour).padStart(2, "0");
            clock.innerText = `${hours}:${minutes}`;
        }
    }
    else { // 새벽 6시 ~ 오후 5시
        if (curHour > 12) {
            const hours = String(curHour - 12).padStart(2, "0");
            clock.innerText = `${hours}:${minutes}`;
        }
        else {
            const hours = String(curHour).padStart(2, "0");
            clock.innerText = `${hours}:${minutes}`;
        }
    }
}

getClock();
setInterval(getClock, 1000);

const am = document.createElement("span");
const pm = document.createElement("span");
am.innerText = "AM";
pm.innerText = "PM";
am.classList.add("am");
pm.classList.add("pm");

const date = new Date();
const hourAMPM = date.getHours();

if (hourAMPM >= 18 || hourAMPM < 6) {
    if (hourAMPM === 0) {
        wholeClock.appendChild(am);
    }
    else if (hourAMPM >= 18) {
        wholeClock.appendChild(pm);
    }
    else {
        wholeClock.appendChild(am);
    }
}
else {
    if (hourAMPM >= 12) {
        wholeClock.appendChild(pm);
    }
    else {
        wholeClock.appendChild(am);
    }
}
