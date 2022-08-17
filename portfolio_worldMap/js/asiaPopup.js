const worldMapAsia = document.querySelector("#world-map");
const asiaClick = document.querySelector("#asia");
const clockAsia = document.querySelector("h1.asia-clock");

function localTime() {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const th_TIME_DIFF = 7 * 60 * 60 * 1000;
  const th_date = new Date(utc + th_TIME_DIFF);

  const th_date_hours = String(th_date.getHours()).padStart(2, "0");
  const th_date_minutes = String(th_date.getMinutes()).padStart(2, "0");
  const th_date_seconds = String(th_date.getSeconds()).padStart(2, "0");
  clockAsia.innerText = `local Time  ${th_date_hours}:${th_date_minutes}:${th_date_seconds}`;
}
localTime;
setInterval(localTime, 1000);

function aClick(e) {
  e.preventDefault();
  // document.getElementById("article-asia-wrap").style.display = "block";
  // document.querySelector(".slider").reloadeSlider();
  document.getElementById("logo").style.display = "none";
  worldMapAsia.style.opacity = "0.5";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}
function btnAsia() {
  document.getElementById("article-asia-wrap").style.display = "none";
  document.getElementById("logo").style.display = "block";
  worldMapAsia.style.opacity = "1";
  document.body.style.backgroundColor = "aliceblue";
}

// function pinOpen() {
//   document.querySelector("#svg-asia1 .pin1, #svg-asia2 > .pin1").style.display =
//     "block";
// }
// function pinClose() {
//   document.querySelector("#svg-asia1 .pin1, #svg-asia2 .pin1").style.display =
//     "none";
// }

function pinOpen() {
  document.querySelector("#svg-asia1 .pin1").style.display = "block";
  document.querySelector("#svg-asia2 .pin1").style.display = "block";
}
function pinClose() {
  document.querySelector("#svg-asia1 .pin1").style.display = "none";
  document.querySelector("#svg-asia2 .pin1").style.display = "none";
}

asiaClick.addEventListener("mouseover", pinOpen);
asiaClick.addEventListener("mouseout", pinClose);
asiaClick.addEventListener("click", aClick);
// $(function () {
// $("#asia").on("click", function () {
//   $("").fadeOut(1000);
//   $("article-asia-wrap").fadeIn(2000);
// });
// $("#logo").on("click", function () {
//   $("section").fadeOut(1000);
//   $(".wrapper").fadeIn(2000);
// });
// });
