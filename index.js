//Calling a method with methodName
// document.querySelector("button").addEventListener("click", handleClick);


// document.addEventListener("keydown", function(event) {
//     console.log(event);
//     alert(event.key+" was pressed");
// });

//Approach - 2 (Approach - 1 below)

document.addEventListener("keydown", function(event) {
     playSound(event.key);
     addAnimation(event.key);   
});

function playSound(event) {
    switch(event) {
        case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
        case "a":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
        case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
        case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
        case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
        case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
        case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
        default:
            console.log("Wrong key pressed!!");
            break;
    }
}

function addAnimation(key) {
    console.log(key);
    var activeButton  = document.querySelector("."+key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}


//Approach - 1

var buttons = document.querySelectorAll(".drum");

for(var i=0; i<buttons.length; i++) {
    if(buttons[i].classList.contains("w")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/crash.mp3");
            addAnimation("w");
            audio.play();
        });
    } else if(buttons[i].classList.contains("a")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/kick-bass.mp3");
            addAnimation("a");
            audio.play();
        });
    } else if(buttons[i].classList.contains("s")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/snare.mp3");
            addAnimation("s");
            audio.play();
        });
    } else if(buttons[i].classList.contains("d")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/tom-1.mp3");
            addAnimation("d");
            audio.play();
        });
    } else if(buttons[i].classList.contains("j")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/tom-2.mp3");
            addAnimation("j");
            audio.play();
        });
    } else if(buttons[i].classList.contains("k")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/tom-3.mp3");
            addAnimation("k");
            audio.play();
        });
    } else if(buttons[i].classList.contains("l")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/tom-4.mp3");
            addAnimation("l");
            audio.play();
        });
    }  
}




