const hamburger = document.createElement("div");
hamburger.classList.add("hamburger");
hamburger.innerHTML = `
    <div></div>
    <div></div>
    <div></div>
`;

document.querySelector("nav").prepend(hamburger);

const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", e => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            let menu = link.nextElementSibling;
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        }
    });
});

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove("open");
        }
    });
});

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("open");
}