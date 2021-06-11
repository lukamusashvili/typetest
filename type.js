const textArea = document.getElementById("textArea");
const originText = document.getElementById("originText").innerHTML;
var theInterval;
var sec = 0;
var min = 0;
var starter = 0;

function start(){
    starter = 1;
    theInterval = setInterval(myInterval, 1000);
    function myInterval() {
        sec += 1;
        displayTime();
    }
}

function displayTime(){
    if(sec == 60){
        sec = 0;
        min += 1;
    }
    if(min < 10 && sec < 10){
        document.getElementById("min1").innerHTML = 0
        document.getElementById("min2").innerHTML = min
        document.getElementById("sec1").innerHTML = 0
        document.getElementById("sec2").innerHTML = sec
    }
    if(min < 10 && sec >= 10){
        document.getElementById("min1").innerHTML = 0
        document.getElementById("min2").innerHTML = min
        document.getElementById("sec1").innerHTML = sec
        document.getElementById("sec2").innerHTML = ""
    }
    if(min == 1){
        document.getElementById("gif").style.visibility = "visible";
    }
}

function spellCheck() {
    if (starter == 0){
        start();
    }
    let textEntered = textArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);

    if (textEntered == originText) {
        clearInterval(theInterval);
        textArea.style.borderColor = "green";
        document.getElementById("timer").style.borderColor = "green"
        document.getElementById("textArea").disabled = true
    } else {
        if (textEntered == originTextMatch) {
            textArea.style.borderColor = "green";
        } else {
            textArea.style.borderColor = "red";
        }
    }
}

function restart() {
    clearInterval(theInterval);
    sec = 0;
    min = 0;
    starter = 0;
    document.getElementById("min1").innerHTML = 0
    document.getElementById("min2").innerHTML = 0
    document.getElementById("sec1").innerHTML = 0
    document.getElementById("sec2").innerHTML = 0
    document.getElementById("textArea").value = ""
    document.getElementById("textArea").disabled = false
    document.getElementById("timer").style.borderColor = "black"
    document.getElementById("gif").style.visibility = "hidden"
}

textArea.addEventListener("keyup", spellCheck, false);
