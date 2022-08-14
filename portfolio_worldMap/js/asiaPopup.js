const worldMapAsia = document.querySelector("#world-map");
const asiaClick = document.querySelector("#asia");
const clockAsia = document.querySelector("h1.asia-clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockAsia.innerText = `local Time  ${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

function aClick(e) {
  e.preventDefault();
  document.getElementById("article-asia-wrap").style.display = "block";
  worldMapAsia.style.opacity = "0.5";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}
function btnAsia() {
  document.getElementById("article-asia-wrap").style.display = "none";
  worldMapAsia.style.opacity = "1";
  document.body.style.backgroundColor = "aliceblue";
}
asiaClick.addEventListener("click", aClick);
