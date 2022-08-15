const worldMapEurope = document.querySelector("#world-map");
const europeClick = document.querySelector("#europe");
const clockEurope = document.querySelector("h1.europe-clock");

function localTime() {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const fr_TIME_DIFF = 2 * 60 * 60 * 1000;
  const fr_date = new Date(utc + fr_TIME_DIFF);

  const fr_date_hours = String(fr_date.getHours()).padStart(2, "0");
  const fr_date_minutes = String(fr_date.getMinutes()).padStart(2, "0");
  const fr_date_seconds = String(fr_date.getSeconds()).padStart(2, "0");
  clockEurope.innerText = `local Time  ${fr_date_hours}:${fr_date_minutes}:${fr_date_seconds}`;
}
localTime;
setInterval(localTime, 1000);

function aClick(e) {
  e.preventDefault();
  document.getElementById("article-europe-wrap").style.display = "block";
  document.getElementById("logo").style.display = "none";
  worldMapEurope.style.opacity = "0.5";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

function btnEurope() {
  document.getElementById("article-europe-wrap").style.display = "none";
  document.getElementById("logo").style.display = "block";
  worldMapEurope.style.opacity = "1";
  document.body.style.backgroundColor = "aliceblue";
}
europeClick.addEventListener("click", aClick);
