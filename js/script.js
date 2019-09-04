document.getElementById("changetext").onclick = function () {
    click()
};

function click() {
    document.getElementById("changetext").innerHTML = "Thanks for clicking me!";
}

function PlaySound(myaudio) {
    var thissound=document.getElementById(myaudio);
    thissound.play();
}

function StopSound(myaudio) {
    var thissound=document.getElementById(myaudio);
    thissound.pause();
    thissound.currentTime = 0;
}