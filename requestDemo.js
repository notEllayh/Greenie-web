const menuBtn = document.getElementById("menu-button");
const sideNav = document.getElementById("sidenav");

menuBtn.addEventListener("click", () => {
    sideNav.classList.remove("hidden");
});

menuBtn.addEventListener("click", () => {
    sideNav.classList.add("hidden");
});