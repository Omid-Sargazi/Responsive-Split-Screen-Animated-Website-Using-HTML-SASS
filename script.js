var menu = document.querySelector(".menu i");
var clickShow = document.querySelector(".play-btn");
var close = document.querySelector(".fa-times");
function navToggle() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("toggle");
  menu.classList.toggle("fa-times");
}
menu.addEventListener("click", () => navToggle());
function imageToggle() {
  var show = document.querySelector(".image-container");
  var image = document.querySelector(".image img");
  show.classList.toggle("toggleImage");
}
close.addEventListener("click", () => imageToggle());
clickShow.addEventListener("click", () => imageToggle());
