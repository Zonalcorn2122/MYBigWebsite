/* ==========================================
   APP.JS - ZENTRALES SYSTEM
========================================== */

/* ---------- Login Status prüfen ---------- */

function checkLogin() {

    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
        console.log("User ist NICHT eingeloggt");
        return false;
    }

    console.log("User ist eingeloggt");
    return true;
}

checkLogin();

/* ---------- Logout Funktion ---------- */

function logout() {

    localStorage.removeItem("loggedIn");

    alert("Du wurdest ausgeloggt 👋");

    window.location.href = "login.html";
}

/* ---------- Notification System ---------- */

function showNotification(message, type = "success") {

    const notification = document.createElement("div");

    notification.className = "notification";

    notification.innerText = message;

    if (type === "error") {
        notification.style.background = "#ef4444";
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

/* ---------- Button Events (falls vorhanden) ---------- */

document.addEventListener("DOMContentLoaded", () => {

    const loginButton = document.querySelector(".loginButton");

    if (loginButton) {
        loginButton.addEventListener("click", () => {
            showNotification("Willkommen! 🚀");
        });
    }

});

/* ---------- Game Buttons Vorbereitung ---------- */

const snakeBtn = document.getElementById("snakeGame");
const memoryBtn = document.getElementById("memoryGame");
const tttBtn = document.getElementById("tttGame");
const reactionBtn = document.getElementById("reactionGame");

if (snakeBtn) {
    snakeBtn.addEventListener("click", () => {
        showNotification("Snake startet bald 🐍");
    });
}

if (memoryBtn) {
    memoryBtn.addEventListener("click", () => {
        showNotification("Memory startet bald 🧠");
    });
}

if (tttBtn) {
    tttBtn.addEventListener("click", () => {
        showNotification("Tic Tac Toe startet bald ⭕❌");
    });
}

if (reactionBtn) {
    reactionBtn.addEventListener("click", () => {
        showNotification("Reaktionstest startet bald ⚡");
    });
}

/* ---------- Profil Daten (Basis) ---------- */

function loadProfile() {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return;

    const nameElement = document.querySelector(".profile h2");

    if (nameElement) {
        nameElement.innerText = user.username;
    }
}

loadProfile();