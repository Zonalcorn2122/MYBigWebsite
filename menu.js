const menuButton = document.getElementById("menuButton");
const menu = document.querySelector("nav");

let open = false;

// Menü ein/ausblenden
menuButton.addEventListener("click", () => {

    open = !open;

    if (open) {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "70px";
        menu.style.right = "20px";
        menu.style.background = "#1f2937";
        menu.style.padding = "20px";
        menu.style.borderRadius = "15px";
    } else {
        menu.style.display = "none";
    }

});

// Bei größerem Bildschirm immer anzeigen
window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {
        menu.style.display = "flex";
        menu.style.position = "static";
        menu.style.flexDirection = "row";
    } else {
        menu.style.display = "none";
        open = false;
    }

});

// Startzustand
window.addEventListener("load", () => {

    if (window.innerWidth > 768) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }

});