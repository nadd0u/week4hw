var wins = 0;
var losses = 0;
var yourScore = document.getElementById('yourScore');
var replay= document.getElementById('play');
function getRandomValue (a, b){
  return Math.floor((Math.random() * a) + b);
};
console.log(getRandomValue(30, 10));

//yourScore.innerHTML = 0;
var targetScore = document.getElementById('targetScore');
var Val = getRandomValue(30, 10);

targetScore.innerHTML = Val;
var winElement = document.getElementById('wins');
var lossElement = document.getElementById('losses');
function addwins() {
    return wins += 1;
}

function addlosses() {
    return losses += 1;
}
function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
};

var red = document.getElementById("red");
//red.setAttribute("value", "5");
//console.log(red.value);

var blue = document.getElementById("blue");
//console.log(blue.value);

var yellow = document.getElementById("yellow");
//console.log(yellow.value);

var green = document.getElementById("green");
//console.log(green.value);

// add an event listener to elements
red.addEventListener('click', function() {
  //this refers to red
  addToScore(this.value);

  checkPlayerScore();
});


blue.addEventListener('click', function(){
  // this refers to blue
  addToScore(this.value);
  checkPlayerScore();
});
play.addEventListener('click', function(){
var Vals = getRandomValue(30, 10);
targetScore.innerHTML = Vals;
yourScore.innerHTML = 0;
});
yellow.addEventListener('click', function(){
  // this refers to blue
  addToScore(this.value);
  checkPlayerScore();
});

green.addEventListener('click', function(){
  // this refers to blue
  addToScore(this.value);
  checkPlayerScore();
});
//var sum = parseInt(red.value) + parseInt(blue.value) + parseInt(yelow.value) + parseInt(green.value);

// console.log (sum);


function checkPlayerScore() {
  //yourScore, targetScore (parseFloat() is for decimals)
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetScore.innerHTML);
  if (playerInt === targetInt) {

      winElement.innerHTML = addwins();

  } else if (playerInt > targetInt) {

    lossElement.innerHTML =  addlosses();
  }
};

console.log(getRandomValue(15, 4));
