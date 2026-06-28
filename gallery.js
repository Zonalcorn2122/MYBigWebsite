/* ==========================================
   GALLERY.JS - LIGHTBOX
========================================== */

const images = document.querySelectorAll(".gallery img");

// Lightbox erstellen
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

// Bild in Lightbox
const img = document.createElement("img");
lightbox.appendChild(img);

/* ---------- Klick auf Bild ---------- */

images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";
        img.src = image.src;

    });

});

/* ---------- Schließen ---------- */

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});