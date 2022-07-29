const images = [
  "bg01.jpg",
  "bg02.jpg",
  "bg03.jpg",
  "bg04.jpg",
  "bg05.jpg",
  "bg06.jpg",
  "bg07.jpg",
  "bg08.jpg",
  "bg09.jpg",
  "bg10.jpg",
  "bg11.jpg",
  "bg12.jpg",
  "bg13.jpg",
  "bg14.jpg",
  "bg15.jpg",
  "bg16.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
