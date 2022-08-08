let body = document.querySelector("body");
let text = document.createElement("h1");

text.textContent = "Hello~!";
console.log(body.classList);
console.log(window.innerWidth);

body.appendChild(text);
function event() {
  if (window.innerWidth < 550) {
    body.style.backgroundColor = "lightblue";
  } else if (window.innerWidth < 1300) {
    body.style.backgroundColor = "yellow";
  } else if (window.innerWidth < 1800) body.style.backgroundColor = "tomato";
}

window.addEventListener("resize", event);
