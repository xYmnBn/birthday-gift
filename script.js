const bgm = document.getElementById("bgm");

/* ===============================
   🎶 PLAYLIST SYSTEM
================================ */
const playlist = [
    "music1.mp3",
    "music2.mp3",
    "music3.mp3"
];

let currentSong = 0;
let musicStarted = false;

function startMusic() {
    if (musicStarted) return;
    musicStarted = true;

    bgm.src = playlist[currentSong];
    bgm.play();
}

// เล่นเพลงต่ออัตโนมัติ
bgm.addEventListener("ended", () => {
    currentSong++;
    if (currentSong >= playlist.length) {
        currentSong = 0;
    }
    bgm.src = playlist[currentSong];
    bgm.play();
});

/* ===============================
   🌸 START WEBSITE
================================ */
function startWebsite() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    startMusic(); // เริ่มเพลงหลังการกด (ปลอดภัยบนมือถือ)
}

/* ===============================
   💌 MESSAGE V1
================================ */
function showMessage() {
    document.getElementById("message").innerHTML =
        "ขอบคุณที่อยู่ข้างกันเสมอ 💕<br>" +
        "ทุกวันที่มีอ้วนคือวันที่เค้ามีความสุขมากจริง ๆ 🌙";

    document.getElementById("btn2").style.display = "block";
}

/* ===============================
   💖 MESSAGE V2
================================ */
function showMessageV2() {
    document.getElementById("message2").innerHTML = `
        <img src="images/pic4.jpg">

        <div class="birthday-text">
            สุขสันต์วันเกิดนะครับไอแฟนของเค้า 🎂💖<br><br>

            ขอให้ทุกวันของอ้วนเต็มไปด้วยรอยยิ้ม<br>
            ขอให้ความเหนื่อยล้าหายไปกับเสียงหัวเราะ<br>
            และขอให้รู้ไว้เสมอว่า…<br><br>

            <b>ไม่ว่าเมื่อไหร่ เค้าจะอยู่ข้างอ้วนเสมอ~~ 🤍</b>
        </div>
    `;

    document.getElementById("btn3").style.display = "block";
}

/* ===============================
   🤍 MESSAGE V3 + 🎁 TIMER
================================ */
function showMessageV3() {
    document.getElementById("message3").innerHTML = `
        <img src="images/pic5.jpg" class="floating-img">
        <img src="images/pic6.jpg" class="floating-img delay">

        <div class="deep-text">
            มันเป็น 3 ปีที่คบกันมาแล้ว<br>
            มีปัญหาต่าง ๆ มากมาย<br><br>

            แต่เค้าขอบคุณนะ<br>
            ที่อยู่กับคนไม่เอาไหนแบบเค้าด้วย 🤍<br><br>

            เค้าสัญญาว่า<br>
            จะรักษาแฟนคนนี้ไว้ให้สุดฝีมือเลย
        </div>
    `;

    // ⏱️ รอ 10 วิ แล้วโชว์กล่องของขวัญ
    setTimeout(() => {
        document.getElementById("giftBox").classList.add("show");
    }, 10000);
}

/* ===============================
   🎁 OPEN GIFT
================================ */
function openGift() {
    document.getElementById("giftBox").style.display = "none";
    document.getElementById("finalSurprise").style.display = "flex";

    // 💥 ระเบิดหัวใจ
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement("div");
        heart.className = "explode";
        heart.innerHTML = "💖";

        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.setProperty("--x", `${Math.random() * 400 - 200}px`);
        heart.style.setProperty("--y", `${Math.random() * 400 - 200}px`);

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}

/* ===============================
   💖 FLOATING HEART EFFECT
================================ */
setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 300);
