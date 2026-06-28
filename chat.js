/* ==========================================
   CHAT.JS - EINFACHER LOKALER CHAT
========================================== */

const input = document.getElementById("message");
const sendBtn = document.getElementById("send");
const messagesBox = document.getElementById("messages");

/* ---------- Nachrichten laden ---------- */

function loadMessages() {

    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    messagesBox.innerHTML = "";

    messages.forEach(msg => {

        const div = document.createElement("div");

        div.classList.add("message");

        // einfache Fake-Logik: eigene Nachrichten rechts
        if (msg.from === "me") {
            div.classList.add("right");
        } else {
            div.classList.add("left");
        }

        div.innerText = msg.text;

        messagesBox.appendChild(div);

    });

    messagesBox.scrollTop = messagesBox.scrollHeight;
}

/* ---------- Nachricht senden ---------- */

function sendMessage() {

    const text = input.value.trim();

    if (text === "") return;

    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.push({
        text: text,
        from: "me",
        time: Date.now()
    });

    localStorage.setItem("messages", JSON.stringify(messages));

    input.value = "";

    loadMessages();

    // kleine Fake-Antwort (Computer)
    setTimeout(() => {

        const replies = [
            "Cool 😄",
            "Okay 👍",
            "Interessant!",
            "Ich verstehe das 🤖",
            "Nice 🚀"
        ];

        const botMessage = {
            text: replies[Math.floor(Math.random() * replies.length)],
            from: "bot",
            time: Date.now()
        };

        messages.push(botMessage);

        localStorage.setItem("messages", JSON.stringify(messages));

        loadMessages();

    }, 800);
}

/* ---------- Events ---------- */

if (sendBtn) {
    sendBtn.addEventListener("click", sendMessage);
}

if (input) {
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
}

/* ---------- Start ---------- */

loadMessages();