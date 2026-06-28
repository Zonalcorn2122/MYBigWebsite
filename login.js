const loginForm = document.querySelector("form");

// Wenn wir auf login.html sind
if (loginForm && document.title.includes("Login")) {

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = loginForm.querySelector("input[type='email']").value;
        const password = loginForm.querySelector("input[type='password']").value;

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("Kein Account gefunden! Bitte registrieren.");
            return;
        }

        if (user.email === email && user.password === password) {
            alert("Login erfolgreich! 🚀");

            localStorage.setItem("loggedIn", "true");

            window.location.href = "index.html";
        } else {
            alert("Falsche E-Mail oder Passwort ❌");
        }
    });
}

// Registrierung (register.html)
if (loginForm && document.title.includes("Registrieren")) {

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = loginForm.querySelectorAll("input");

        const username = inputs[0].value;
        const email = inputs[1].value;
        const password = inputs[2].value;
        const password2 = inputs[3].value;

        if (password !== password2) {
            alert("Passwörter stimmen nicht überein!");
            return;
        }

        const user = {
            username,
            email,
            password
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Registrierung erfolgreich! 🎉");

        window.location.href = "login.html";
    });
}