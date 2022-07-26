// const title = document.getElementsByTagName("h1");
// console.log(title);
// const title = document.querySelector(".hello:first-child h1");

// console.log(title);

// title.innerText = "Hello";

// 이벤트 리스너

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleclick() {
//   h1.style.color = "blue";
// }

// function handleMouseEnter() {
//   h1.innerText = "Mouse over here!";
// }

// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//   alert("copier!");
// }

// function handleWindowOffline() {
//   alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//   alert("ALL GOOOOD!!");
// }

// h1.addEventListener("click", handleTitleclick);
// // h1.onclick = handleTitleclick;
// h1.addEventListener("mouseenter", handleMouseEnter);
// // h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave", handleMouseLeave);
// // h1.onmouseleave = handleMouseLeave;

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// 색상 반환

// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleclick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }
// h1.addEventListener("click", handleTitleclick);

// CSS 클래스 사용

// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleclick() {
//   const clickedClass = "clicked";
//   if (h1.className === clickedClass) {
//     h1.className = "";
//   } else {
//     h1.className = clickedClass;
//   }
// }
// h1.addEventListener("click", handleTitleclick);

// remove add
// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleclick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }
// h1.addEventListener("click", handleTitleclick);

// toggle
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleclick() {
  h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleclick);
