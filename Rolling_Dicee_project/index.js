var files = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var i = Math.floor(Math.random()*files.length);

var j = Math.floor(Math.random()*files.length);
console.log(i + " " + j);
var url1 = files[i];
var url2 = files[j];


document.querySelector(".img1").setAttribute("src", url1);
document.querySelector(".img2").setAttribute("src", url2);


if(url1===url2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else if(url1>url2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}