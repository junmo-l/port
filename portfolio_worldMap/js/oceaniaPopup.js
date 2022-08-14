const worldMapOceania = document.querySelector("#world-map");
const oceaniaClick = document.querySelector("#oceania");
const clockOceania = document.querySelector("h1.oceania-clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours() + 1).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockOceania.innerText = `local Time  ${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

function aClick(e) {
  e.preventDefault();
  document.getElementById("article-oceania-wrap").style.display = "block";
  worldMapOceania.style.opacity = "0.5";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

function btnOceania() {
  document.getElementById("article-oceania-wrap").style.display = "none";
  worldMapOceania.style.opacity = "1";
  document.body.style.backgroundColor = "aliceblue";
}
oceaniaClick.addEventListener("click", aClick);
