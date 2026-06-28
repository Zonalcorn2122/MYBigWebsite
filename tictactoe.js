/* ==========================================
   TIC TAC TOE
========================================== */

const boardContainer = document.getElementById("ttt");

if (boardContainer) {

    let board = ["", "", "", "", "", "", "", "", ""];
    let player = "X";
    let gameOver = false;

    const winCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    function render() {

        boardContainer.innerHTML = "";

        board.forEach((cell, i) => {

            const div = document.createElement("div");

            div.style.width = "100px";
            div.style.height = "100px";
            div.style.display = "inline-flex";
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
            div.style.fontSize = "40px";
            div.style.border = "2px solid #2563eb";
            div.style.cursor = "pointer";

            div.innerText = cell;

            div.addEventListener("click", () => {

                if (board[i] || gameOver) return;

                board[i] = player;
                checkWin();

                if (!gameOver) {
                    setTimeout(computerMove, 400);
                }

                render();
            });

            boardContainer.appendChild(div);

        });

    }

    function computerMove() {

        let empty = board
            .map((v, i) => v === "" ? i : null)
            .filter(v => v !== null);

        if (empty.length === 0) return;

        let move = empty[Math.floor(Math.random() * empty.length)];

        board[move] = "O";

        checkWin();

        render();
    }

    function checkWin() {

        for (let combo of winCombos) {

            let [a,b,c] = combo;

            if (board[a] &&
                board[a] === board[b] &&
                board[a] === board[c]) {

                gameOver = true;

                setTimeout(() => {
                    alert(board[a] + " gewinnt! 🎉");
                }, 100);

            }
        }

        if (!board.includes("") && !gameOver) {
            gameOver = true;
            alert("Unentschieden 🤝");
        }

    }

    render();
}