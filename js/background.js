const images = []

const LASTIMGNUM = 10; // 배경 이미지 총 개수

for (let i = 1; i <= LASTIMGNUM; i++) {
    const title = `${i}.jpg`;
    images.push(title);
}

const btn = document.querySelector("#changeBGbtn");

const background = document.querySelector("#bgImage");

function changeBG() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];

    background.src = `image/${chosenImage}`;

    // src = `image/${chosenImage}`;
    // document.body.style.backgroundImage = "url('" + src + "')";
}

changeBG();
setInterval(changeBG, 3600000); // update every hour

btn.addEventListener("click", changeBG);