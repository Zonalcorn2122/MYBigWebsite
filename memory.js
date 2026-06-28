/* ==========================================
   MEMORY GAME
========================================== */

const container = document.getElementById("memoryGame");

if (container) {

    const values = ["🍎","🍌","🍇","🍓","🍒","🍍","🥝","🍉"];

    let cards = [...values, ...values];

    cards.sort(() => 0.5 - Math.random());

    let first = null;
    let second = null;
    let lock = false;

    cards.forEach(value => {

        const card = document.createElement("div");

        card.classList.add("memoryCard");

        card.innerText = "❓";

        card.dataset.value = value;

        card.addEventListener("click", () => {

            if (lock || card.classList.contains("matched")) return;

            card.innerText = value;

            if (!first) {

                first = card;

            } else {

                second = card;
                lock = true;

                if (first.dataset.value === second.dataset.value) {

                    first.classList.add("matched");
                    second.classList.add("matched");

                    reset();

                } else {

                    setTimeout(() => {

                        first.innerText = "❓";
                        second.innerText = "❓";

                        reset();

                    }, 800);

                }

            }

        });

        container.appendChild(card);

    });

    function reset() {
        first = null;
        second = null;
        lock = false;
    }

}