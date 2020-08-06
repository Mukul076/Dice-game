var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImage1="dice"+randomNumber1+".png";

var imagesrc="images/"+randomImage1;

document.querySelectorAll("img")[0].setAttribute("src", imagesrc);

var randomNumber2= Math.floor(Math.random()*6)+1;

var randomImage2="dice"+randomNumber2+".png";

var imagesrc2="images/"+randomImage2;

document.querySelectorAll("img")[1].setAttribute("src", imagesrc2);


if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player1 wins!!🚩";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Player2 wins!!";
}
else
{
  document.querySelector("h1").innerHTML="It's a DRAW!!";
}
