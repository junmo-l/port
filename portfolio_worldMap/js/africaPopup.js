const worldMapAfrica = document.querySelector("#world-map");
const africaClick = document.querySelector("#africa");
const clockOAfrica = document.querySelector("h1.africa-clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours() + 1).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockOAfrica.innerText = `local Time  ${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

function aClick(e) {
  e.preventDefault();
  document.getElementById("article-africa-wrap").style.display = "block";
  worldMapAfrica.style.opacity = "0.5";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

function btnAfrica() {
  document.getElementById("article-africa-wrap").style.display = "none";
  worldMapAfrica.style.opacity = "1";
  document.body.style.backgroundColor = "aliceblue";
}
africaClick.addEventListener("click", aClick);
