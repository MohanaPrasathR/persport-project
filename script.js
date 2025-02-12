document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
    });

    const words = ["Web Developer", "UI/UX Designer", "Creative Coder"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    let typingSpeed = 100;
    let erasingSpeed = 50;
    let waitTime = 1500;

    function typeEffect() {
        currentWord = words[wordIndex];
        document.querySelector(".dynamic-text").textContent = currentWord.substring(0, letterIndex) + "|";

        if (letterIndex < currentWord.length) {
            letterIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            setTimeout(eraseEffect, waitTime);
        }
    }

    function eraseEffect() {
        document.querySelector(".dynamic-text").textContent = currentWord.substring(0, letterIndex) + "|";

        if (letterIndex > 0) {
            letterIndex--;
            setTimeout(eraseEffect, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, typingSpeed);
        }
    }

    typeEffect();
});
