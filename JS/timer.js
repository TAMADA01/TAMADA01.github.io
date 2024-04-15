let timerTime = 0
let time;
let minute;
let second;
setInterval(()=>{
    timerTime++;
    displayTime()
}, 1000)

function displayTime(){
    time = document.getElementById("time")
    if (time) {
        document.getElementById("spinner").style.display = "none";
        time.style.display = "block";
        minute = time.querySelector(".minute")
        second = time.querySelector(".second")
        let minuteValue = Math.floor(timerTime / 60)
        minute.innerHTML = minuteValue < 10 ? "0"+ minuteValue : minuteValue
        let secondValue = timerTime % 60
        second.innerHTML = secondValue < 10 ? "0"+ secondValue : secondValue
    }
}