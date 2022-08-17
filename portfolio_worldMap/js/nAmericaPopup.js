const worldMapNAmerica = document.querySelector("#world-map");
const nAmericaClick = document.querySelector("#nAmerica");
const clockNAmerica = document.querySelector("h1.nAmerica-clock");

function localTime() {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const NA_TIME_DIFF = -4 * 60 * 60 * 1000;
  const NA_date = new Date(utc + NA_TIME_DIFF);

  const NA_date_hours = String(NA_date.getHours()).padStart(2, "0");
  const NA_date_minutes = String(NA_date.getMinutes()).padStart(2, "0");
  const NA_date_seconds = String(NA_date.getSeconds()).padStart(2, "0");
  clockNAmerica.innerText = `local Time  ${NA_date_hours}:${NA_date_minutes}:${NA_date_seconds}`;
}
localTime;
setInterval(localTime, 1000);

function aClick(e) {
  e.preventDefault();
  document.getElementById("article-nAmerica-wrap").style.display = "block";
  document.getElementById("logo").style.display = "none";
  worldMapNAmerica.style.opacity = "0.5";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

function btnNAmerica() {
  document.getElementById("article-nAmerica-wrap").style.display = "none";
  document.getElementById("logo").style.display = "block";
  worldMapNAmerica.style.opacity = "1";
  document.body.style.backgroundColor = "aliceblue";
}

function pinOpen() {
  document.querySelector(".pin5").style.display = "block";
}
function pinClose() {
  document.querySelector(".pin5").style.display = "none";
}

nAmericaClick.addEventListener("mouseover", pinOpen);
nAmericaClick.addEventListener("mouseout", pinClose);
nAmericaClick.addEventListener("click", aClick);
