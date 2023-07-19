
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function (){
    var userChosenColor = $("this").attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColors = buttonColors[randomNumber];
    gamePattern.push(randomChosenColors);

    $("#" + randomChosenColors).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColors);
}

function playSound(name){
    var buttonSound = new Audio("sounds/" + name + ".mp3");
    buttonSound.play();
}

function animatePress(currentColor){
        $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

