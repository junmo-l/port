// const a = 5;
// const b = 2;

// let myName = "junmo";
// console.log(a + b);
// console.log("hello " + myName);

// myName = "junmoLee";

// console.log("your new name is " + myName);

// const amIFat = null;
// console.log(amIFat);

// let something;
// console.log(something);

// array
// const daysOfWeek = ["mon", "tue", "wde", "thu", "fri", "sat", "sun"];
// console.log(daysOfWeek[6]);

// daysOfWeek.push("sunday");
// console.log(daysOfWeek[7]);

// const toBuy = ["potato", "tomato", "pizza"];
// toBuy.push("kimbab");
// console.log(toBuy);

// object
// const player = {
//   name: "junmo",
//   points: 10,
//   fat: true,
// };
// console.log(player);
// player.lastname = "potato";
// console.log(player);
// player.points = player.points + 15;
// console.log(player.points);
// console.log(player);

// funtion
// function sayHello(){
//     console.log("Hello my name is C");
// }
// console.log("hello");
// sayHello("junmo");
// sayHello("mojun");
// sayHello("leejun");

// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }
// // 값넣기
// sayHello("junmo", 10);
// sayHello("mojun", 20);
// sayHello("leejun", 30);

// function plus(a, b) {
//   console.log(a + b);
// }
// plus(8, 60);

// function divide(a, b) {
//   console.log(a / b);
// }
// divide(100, 2);

// const player = {
//   name: "junmo",
//   sayHello: function (otherPersonsName) {
//     console.log("hello! " + otherPersonsName + " nice to meet you!");
//   },
// };

// console.log(player.name);
// player.sayHello("msoso");

// const player = {
//   name: "junmo",
//   age: 27,
// };
// player.name = "junmolee";
// console.log(player);
// player.sexy = true;
// console.log(player);

// function plus(a, b) {
//   console.log(a + b);
// }
// plus(100, 200);

// const calculator = {
//   plus: function (a, b) {
//     console.log(a + b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//   },
//   multi: function (a, b) {
//     console.log(a * b);
//   },
//   divide: function (a, b) {
//     console.log(a / b);
//   },
//   powerOf: function (a, b) {
//     console.log(a ** b);
//   },
// };

// calculator.plus(5, 5);
// calculator.minus(5, 5);
// calculator.multi(5, 5);
// calculator.divide(5, 5);
// calculator.powerOf(5, 5);

// const age = 27;
// function claculatorKr(ageFo) {
//   ageFo + 2;
//   return "hello";
// }

// const krAge = calculatorKr(age);

// console.log(krAge);

// 펑션 재활용
// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   multi: function (a, b) {
//     return a * b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
//   powerOf: function (a, b) {
//     return a ** b;
//   },
// };
// const plusResult = calculator.plus(2, 3);
// console.log(plusResult);

// const minusResult = calculator.minus(plusResult, 10);
// console.log(minusResult);

// const multiResult = calculator.multi(10, minusResult);
// console.log(multiResult);

// const divideResult = calculator.divide(multiResult, plusResult);
// console.log(divideResult);

// const powerOfResult = calculator.powerOf(divideResult, minusResult);
// console.log(powerOfResult);

// 문자를 숫자로 바꾸기 parseInt
// const age = prompt("How old are you?");
// console.log(age, parseInt(age));

// 문자인지 숫자인지 확인 isNaN true = 문자 false = 숫자
// const age = parseInt(prompt("How old are you?"));

// // boolean만 삽입 true 일때 실행
// // 숫자를 넣으면 false라 if문이 실행되지 않지만 문자를 넣으면 true라서 if문이 실행됨
// if (isNaN(age)) {
//   console.log("Please write a number");
// } else {
//   console.log("Thank you for writing your age.");
// }

// 나이 반환 로직
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exericise");
} else if (age === 100) {
  console.log("WoW you are wise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}
