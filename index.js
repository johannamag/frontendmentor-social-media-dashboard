const event = document.getElementById("event");
const main = document.querySelector(".main");
const title = document.querySelector(".title");
const number = document.querySelectorAll(".number");

event.addEventListener("click", (e) => {
  e.preventDefault;

  document.body.classList.toggle("dark");
});
