let menu = document.querySelector(".m-menu");
let body = document.querySelector("body");
let main = document.querySelector("#page");
function sidenav() {
  menu.classList.toggle("show");
  body.style.overflow = "hidden";
  main.classList.add("hide")
}
function closenav(){
  menu.classList.toggle("show");
  body.removeAttribute("style");
  main.classList.remove("hide");
}
