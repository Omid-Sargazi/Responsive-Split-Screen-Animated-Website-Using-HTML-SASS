var menu = document.querySelector(".menu i");
function navToggle() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("toggle");
  menu.classList.toggle("fa-times");
}
menu.addEventListener("click", () => navToggle());
