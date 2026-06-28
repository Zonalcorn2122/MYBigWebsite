/* ==========================================
   REACTION GAME
========================================== */

const container = document.getElementById("reactionGame");

if (container) {

    let startTime;
    let timeout;
    let clickable = false;

    const box = document.createElement("div");

    box.style.width = "200px";
    box.style.height = "200px";
    box.style.margin = "50px auto";
    box.style.borderRadius = "20px";
    box.style.background = "#ef4444";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    box.style.color = "white";
    box.style.fontSize = "20px";
    box.style.cursor = "pointer";

    box.innerText = "Warte...";

    container.appendChild(box);

    function startGame() {

        box.style.background = "#ef4444";
        box.innerText = "Warte...";

        clickable = false;

        let delay = Math.random() * 3000 + 1000;

        timeout = setTimeout(() => {

            box.style.background = "#22c55e";
            box.innerText = "Klick!";

            startTime = Date.now();
            clickable = true;

        }, delay);

    }

    box.addEventListener("click", () => {

        if (!clickable) {

            box.innerText = "Zu früh! ❌";

            clearTimeout(timeout);

            setTimeout(startGame, 1000);

            return;
        }

        let reactionTime = Date.now() - startTime;

        box.innerText = reactionTime + " ms ⚡";

        clickable = false;

        setTimeout(startGame, 2000);

    });

    startGame();
}