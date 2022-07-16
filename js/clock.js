const wholeClock = document.querySelector("#wholeClock");
const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    let curHour = date.getHours();
    if (curHour >= 18 || curHour < 6) { // 18 ~ 24(0) & 1 ~ 5: MOON
        if (curHour === 0) {
            curHour = 12;
            const hours = String(curHour).padStart(2, "0");
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
    else { // 6 ~ 17: SUN
        if (curHour >= 12) {
            const hours = String(curHour).padStart(2, "0");
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

const curHourFromText = parseInt(clock.innerText.substr(0, 2), 10);
console.log(curHourFromText);

if (curHourFromText >= 18 || curHourFromText < 6) { // 18 ~ 24(0) & 1 ~ 5: MOON
    if (curHourFromText === 0) {
        wholeClock.appendChild(am);
    }
    else if (curHourFromText >= 18) {
        wholeClock.appendChild(pm);
    }
    else {
        wholeClock.appendChild(am);
    }
}
else { // 6 ~ 17: SUN
    if (curHourFromText >= 12) {
        wholeClock.appendChild(pm);
    }
    else {
        wholeClock.appendChild(am);
    }
}
