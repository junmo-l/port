// $(document).ready(function () {
//   $("img[usemap]").rwdImageMaps();
// });
const asiaClick = document.querySelector("#asia");
const clock = document.querySelector("h1.asia-clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

function aClick(e) {
  e.preventDefault();
  document.getElementById("article-wrap").style.display = "block";
}
console.log(asiaClick);
function btn() {
  document.getElementById("article-wrap").style.display = "none";
}
asiaClick.addEventListener("click", aClick);
