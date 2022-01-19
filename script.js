// sounds
const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

// image buttons when clicked play relevent sound
const mainDrumButton = document.getElementById("container1").querySelectorAll(".mainDrum");
const floorTomDrumButton = document.getElementById("container2").querySelectorAll(".floorTomDrum");
const snareDrumButton = document.getElementById("container3").querySelectorAll(".snareDrum");
const mediumTomDrumButton = document.getElementById("container4").querySelectorAll(".mediumTomDrum");
const highTomDrumButton = document.getElementById("container5").querySelectorAll(".highTomDrum");
const crashCymbalButton = document.querySelector(".crashCymbal");
const hiHatButton = document.querySelector(".hiHat");

if(window.innerHeight > window.innerWidth) {
    alert("Please use Landscape!");
}

let mainDrumCounter = 0;

for (let i = 0; i < mainDrumButton.length; i++) {
    mainDrumButton[i].addEventListener("click", () => {
        mainDrumCounter++;
        if (mainDrumCounter % 2) {
            kick.pause();
            kick.currentTime = 0;
            kick.play();
        } else {
            boom.pause();
            boom.currentTime = 0;
            boom.play();
        }
    });
}

for (let i = 0; i < floorTomDrumButton.length; i++) {
    floorTomDrumButton[i].addEventListener("click", () => {
        tom.pause();
        tom.currentTime = 0;
        tom.play();
    });
}

for (let i = 0; i < snareDrumButton.length; i++) {
    snareDrumButton[i].addEventListener("click", () => {
        snare.pause();
        snare.currentTime = 0;
        snare.play();
    });
}

for (let i = 0; i < mediumTomDrumButton.length; i++) {
    mediumTomDrumButton[i].addEventListener("click", () => {
        tom.pause();
        tom.currentTime = 0;
        tom.play();
    });
}

for (let i = 0; i < highTomDrumButton.length; i++) {
    highTomDrumButton[i].addEventListener("click", () => {
        tom.pause();
        tom.currentTime = 0;
        tom.play();
    });
}

crashCymbalButton.addEventListener("click", () => {
    ride.pause();
    ride.currentTime = 0;
    ride.play();
});

let hiHatCounter = 0;

hiHatButton.addEventListener("click", () => {
    hiHatCounter++;
    if (hiHatCounter % 4) {
        hihat.pause()
        hihat.currentTime = 0;
        hihat.play();
    } else {
        openhat.pause();
        openhat.currentTime = 0;
        openhat.play();
    }
})

window.addEventListener("keypress", (k) => {
    if (k.key === "q") {
        boom.pause();
        boom.currentTime = 0;
        boom.play();
    } else if (k.key === "w") {
        clap.pause();
        clap.currentTime = 0;
        clap.play();
    } else if (k.key === "e") {
        hihat.pause()
        hihat.currentTime = 0;
        hihat.play();
    } else if (k.key === "a") {
        kick.pause()
        kick.currentTime = 0;
        kick.play();
    } else if (k.key === "s") {
        openhat.pause();
        openhat.currentTime = 0;
        openhat.play();
    } else if (k.key === "d") {
        ride.pause();
        ride.currentTime = 0;
        ride.play();
    } else if (k.key === "z") {
        snare.pause();
        snare.currentTime = 0;
        snare.play();
    } else if (k.key === "x") {
        tink.pause();
        tink.currentTime = 0;
        tink.play();
    } else if (k.key === "c") {
        tom.pause();
        tom.currentTime = 0;
        tom.play();
    } 
})