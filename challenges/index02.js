const selectNum1 = document.querySelector("#selectNum1");
const num1 = document.querySelector("#num1");
const selectNum2 = document.querySelector("#selectNum2");
const num2 = document.querySelector("#num2");
// const btn = document.querySelector("#btn");
const value1 = document.querySelector("#value1");
const value2 = document.querySelector("#value2");

let randomNumber = 0;

function onNum1Submit(event) {
  event.preventDefault();
}

function onNum2Submit(event) {
  let check = parseInt(num1.value) == parseInt(num2.value);
  event.preventDefault();
  if (check) {
    randomNumber = Math.ceil(Math.random() * parseInt(num1.value));
  } else {
    num2.value = 0;
    alert(`${num1.value}보다 작은 값을 넣어주세요.`);
  }

  if (parseInt(num2.value) == randomNumber) {
    value1.innerText = `You chose : ${num2.value}, the machine chose : ${randomNumber}.`;
    value2.innerText = "You Winner!";
  } else {
    value1.innerText = `You chose : ${num2.value}, the machine chose : ${randomNumber}.`;
    value2.innerText = "You Loser!";
  }
}

selectNum1.addEventListener("submit", onNum1Submit);
selectNum2.addEventListener("submit", onNum2Submit);
