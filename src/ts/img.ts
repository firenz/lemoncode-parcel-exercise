const logoImg: string = require("../img/logo_2.png");

const img: HTMLImageElement = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);
