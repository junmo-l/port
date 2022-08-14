const worldMapSAmerica = document.querySelector("#world-map");
const sAmericaClick = document.querySelector("#sAmerica");
const clockSAmerica = document.querySelector("h1.sAmerica-clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours() + 1).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockSAmerica.innerText = `local Time  ${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

function aClick(e) {
  e.preventDefault();
  document.getElementById("article-sAmerica-wrap").style.display = "block";
  worldMapSAmerica.style.opacity = "0.5";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

function btnSAmerica() {
  document.getElementById("article-sAmerica-wrap").style.display = "none";
  worldMapSAmerica.style.opacity = "1";
  document.body.style.backgroundColor = "aliceblue";
}
sAmericaClick.addEventListener("click", aClick);
