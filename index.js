// Button Press Code
var noOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i<noOfDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonName = this.innerHTML;
    makeSound(buttonName);
    buttonAnimation(buttonName);

  })
}

// Key Press Code

document.addEventListener("keypress", function(event){

  makeSound(event.key);
  buttonAnimation(event.key);

})


// Audio Code
function makeSound(choice){
  switch (choice) {

    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;

    default:alert(choice+" is a wrong key!");

  }
}

// Button Animation

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },1000);
}
