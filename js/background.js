const images = []

const LASTIMGNUM = 13; // 배경 이미지 총 개수

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
setInterval(changeBG, 86400000); // update everyday

btn.addEventListener("click", changeBG);