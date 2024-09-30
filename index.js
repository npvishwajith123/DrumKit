//Calling a method with methodName
// document.querySelector("button").addEventListener("click", handleClick);


// document.addEventListener("keydown", function(event) {
//     console.log(event);
//     alert(event.key+" was pressed");
// });

//Approach - 2 (Approach - 1 below)

document.addEventListener("keydown", function(event) {
        switch(event.key) {
            case "w":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
            case "a":
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
            case "s":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
            case "d":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
            case "j":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
            case "k":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
            case "l":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
            default:
                console.log("Wrong key pressed!!");
        }
});

//Approach - 1

var buttons = document.querySelectorAll(".drum");

for(var i=0; i<buttons.length; i++) {
    if(buttons[i].classList.contains("w")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        });
    } else if(buttons[i].classList.contains("a")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        });
    } else if(buttons[i].classList.contains("s")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        });
    } else if(buttons[i].classList.contains("d")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        });
    } else if(buttons[i].classList.contains("j")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        });
    } else if(buttons[i].classList.contains("k")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        });
    } else if(buttons[i].classList.contains("l")) {
        buttons[i].addEventListener("click", function () {
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        });
    }  
}




