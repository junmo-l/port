// const title = document.getElementsByTagName("h1");
// console.log(title);
// const title = document.querySelector(".hello:first-child h1");

// console.log(title);

// title.innerText = "Hello";

const title = document.querySelector("div.hello:first-child h1");

function handleTitleclick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleclick);
