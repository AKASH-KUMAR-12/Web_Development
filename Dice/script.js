var randomnum1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomnum1+".png";
var randomImageSource="images/"+randomDiceImage;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource);

var randomnum2=Math.floor(Math.random()*7);
var randomDiceImage2="dice"+randomnum2+".png";
var randomImageSource2="images/"+randomDiceImage2;
var img2=document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if (randomnum1 > randomnum2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomnum2 > randomnum1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  