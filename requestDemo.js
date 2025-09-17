const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sidenav");

menuBtn.addEventListener("click", () => {
  sideNav.classList.toggle("hidden");
});
