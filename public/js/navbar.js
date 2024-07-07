const menuOpen = document.querySelector("#mobile-menu-open");
const menuClose = document.querySelector("#mobile-menu-close");
const navMenu = document.querySelector("#side-bar");

menuOpen.addEventListener("click", () => {
  navMenu.classList.remove("hide");
});

menuClose.addEventListener("click", () => {
  navMenu.classList.add("hide");
});
