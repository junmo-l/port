const worldMapEurope = document.querySelector("#world-map");
const europeClick = document.querySelector("#europe");
const clockOEurope = document.querySelector("h1.europe-clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours() + 1).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockOEurope.innerText = `local Time  ${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

function aClick(e) {
  e.preventDefault();
  document.getElementById("article-europe-wrap").style.display = "block";
  worldMapEurope.style.opacity = "0.5";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

function btnEurope() {
  document.getElementById("article-europe-wrap").style.display = "none";
  worldMapEurope.style.opacity = "1";
  document.body.style.backgroundColor = "aliceblue";
}
europeClick.addEventListener("click", aClick);
