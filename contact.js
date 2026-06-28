/* ==========================================
   CONTACT.JS
   Kontaktformular Logik
========================================== */

const form = document.getElementById("contactForm");

/* ---------- Formular absenden ---------- */

if (form) {

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea, select");

        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const type = inputs[2].value;
        const message = inputs[3].value.trim();

        // einfache Validierung
        if (name === "" || email === "" || message === "") {
            alert("Bitte alle Felder ausfüllen!");
            return;
        }

        const contactData = {
            name,
            email,
            type,
            message,
            time: Date.now()
        };

        // speichern im localStorage
        const messages = JSON.parse(localStorage.getItem("contactMessages")) || [];

        messages.push(contactData);

        localStorage.setItem("contactMessages", JSON.stringify(messages));

        // Erfolgsmeldung
        showSuccess();

        // Formular zurücksetzen
        form.reset();

        console.log("Neue Kontaktanfrage:", contactData);
    });
}

/* ---------- Erfolgsmeldung ---------- */

function showSuccess() {

    const div = document.createElement("div");

    div.className = "notification";

    div.innerText = "Nachricht erfolgreich gesendet! ";

    document.body.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 3000);
}