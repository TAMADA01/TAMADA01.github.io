import { displayTime } from "./timer.js";

displayTime()

setInterval(()=>{
    displayTime()
}, 1000)