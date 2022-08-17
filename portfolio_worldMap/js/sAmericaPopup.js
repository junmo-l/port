const worldMapSAmerica = document.querySelector("#world-map");
const sAmericaClick = document.querySelector("#sAmerica");
const clockSAmerica = document.querySelector("h1.sAmerica-clock");

function localTime() {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const SA_TIME_DIFF = -3 * 60 * 60 * 1000;
  const SA_date = new Date(utc + SA_TIME_DIFF);

  const SA_date_hours = String(SA_date.getHours()).padStart(2, "0");
  const SA_date_minutes = String(SA_date.getMinutes()).padStart(2, "0");
  const SA_date_seconds = String(SA_date.getSeconds()).padStart(2, "0");
  clockSAmerica.innerText = `local Time  ${SA_date_hours}:${SA_date_minutes}:${SA_date_seconds}`;
}
localTime;
setInterval(localTime, 1000);

function aClick(e) {
  e.preventDefault();
  document.getElementById("article-sAmerica-wrap").style.display = "block";
  document.getElementById("logo").style.display = "none";
  worldMapSAmerica.style.opacity = "0.5";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

function btnSAmerica() {
  document.getElementById("article-sAmerica-wrap").style.display = "none";
  document.getElementById("logo").style.display = "block";
  worldMapSAmerica.style.opacity = "1";
  document.body.style.backgroundColor = "aliceblue";
}

function pinOpen() {
  document.querySelector(".pin6").style.display = "block";
}
function pinClose() {
  document.querySelector(".pin6").style.display = "none";
}

sAmericaClick.addEventListener("mouseover", pinOpen);
sAmericaClick.addEventListener("mouseout", pinClose);
sAmericaClick.addEventListener("click", aClick);
