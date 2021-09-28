document.querySelector('button').addEventListener('click', function() {
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=randomNumber1+1;
randomNumber1=Math.floor(randomNumber1);
var randomimage1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomimage1);

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=randomNumber2+1;
randomNumber2=Math.floor(randomNumber2);
var randomimage2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomimage2);

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
});