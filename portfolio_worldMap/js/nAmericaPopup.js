const worldMapNAmerica = document.querySelector("#world-map");
const nAmericaClick = document.querySelector("#nAmerica");
const clockNAmerica = document.querySelector("h1.nAmerica-clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours() + 1).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockNAmerica.innerText = `local Time  ${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

function aClick(e) {
  e.preventDefault();
  document.getElementById("article-nAmerica-wrap").style.display = "block";
  worldMapNAmerica.style.opacity = "0.5";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

function btnNAmerica() {
  document.getElementById("article-nAmerica-wrap").style.display = "none";
  worldMapNAmerica.style.opacity = "1";
  document.body.style.backgroundColor = "aliceblue";
}
nAmericaClick.addEventListener("click", aClick);
