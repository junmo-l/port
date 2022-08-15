const worldMapOceania = document.querySelector("#world-map");
const oceaniaClick = document.querySelector("#oceania");
const clockOceania = document.querySelector("h1.oceania-clock");

function localTime() {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const oc_TIME_DIFF = 10 * 60 * 60 * 1000;
  const oc_date = new Date(utc + oc_TIME_DIFF);

  const oc_date_hours = String(oc_date.getHours()).padStart(2, "0");
  const oc_date_minutes = String(oc_date.getMinutes()).padStart(2, "0");
  const oc_date_seconds = String(oc_date.getSeconds()).padStart(2, "0");
  clockOceania.innerText = `local Time  ${oc_date_hours}:${oc_date_minutes}:${oc_date_seconds}`;
}
localTime;
setInterval(localTime, 1000);

function aClick(e) {
  e.preventDefault();
  document.getElementById("article-oceania-wrap").style.display = "block";
  document.getElementById("logo").style.display = "none";
  worldMapOceania.style.opacity = "0.5";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

function btnOceania() {
  document.getElementById("article-oceania-wrap").style.display = "none";
  document.getElementById("logo").style.display = "block";
  worldMapOceania.style.opacity = "1";
  document.body.style.backgroundColor = "aliceblue";
}
oceaniaClick.addEventListener("click", aClick);
