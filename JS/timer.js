let startTime = new Date().valueOf()*0.001

export function displayTime(){
    let time = document.getElementById("time");
    if (time) {
        let timerTime = parseInt(new Date().valueOf()*0.001 - startTime);
        let minuteValue = Math.floor(timerTime / 60);
        minuteValue = minuteValue < 10 ? "0" + minuteValue : minuteValue;
        let secondValue = timerTime % 60;
        secondValue = secondValue < 10 ? "0" + secondValue : secondValue;
        time.innerHTML = minuteValue + ":" + secondValue;
    }
}