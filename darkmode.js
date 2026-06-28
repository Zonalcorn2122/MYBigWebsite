const button = document.getElementById("darkModeButton");

// Darkmode beim Laden prüfen
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// Toggle Funktion
button.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});