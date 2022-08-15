const worldMapAfrica = document.querySelector("#world-map");
const africaClick = document.querySelector("#africa");
const clockOAfrica = document.querySelector("h1.africa-clock");

function localTime() {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const af_TIME_DIFF = 2 * 60 * 60 * 1000;
  const af_date = new Date(utc + af_TIME_DIFF);

  const af_date_hours = String(af_date.getHours()).padStart(2, "0");
  const af_date_minutes = String(af_date.getMinutes()).padStart(2, "0");
  const af_date_seconds = String(af_date.getSeconds()).padStart(2, "0");
  clockOAfrica.innerText = `local Time  ${af_date_hours}:${af_date_minutes}:${af_date_seconds}`;
}
localTime;
setInterval(localTime, 1000);

function aClick(e) {
  e.preventDefault();
  document.getElementById("article-africa-wrap").style.display = "block";
  document.getElementById("logo").style.display = "none";
  worldMapAfrica.style.opacity = "0.5";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

function btnAfrica() {
  document.getElementById("article-africa-wrap").style.display = "none";
  document.getElementById("logo").style.display = "block";
  worldMapAfrica.style.opacity = "1";
  document.body.style.backgroundColor = "aliceblue";
}
africaClick.addEventListener("click", aClick);
