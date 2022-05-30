
let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hour = 0;
let minutes = 0;
let seconds = 0;
let millisecond = 0;


let stopwatchDisplay=function(){
    display.innerHTML = hour + "<span style='font-size:20px;'>:</span>" + minutes + "<span style='font-size:20px;'>:</span>" + seconds + "<span style='font-size:20px;'>:</span>" + millisecond;
    millisecond++;
    if(millisecond % 10 == 0){
        seconds++;
        millisecond = 0;
        if(seconds % 60 == 0){
            minutes++;
            seconds = 0;
            if(minutes % 60 == 0){
                hour++;
                minutes = 0; 
                
            }
        }
    }
}

document.getElementById("start").disabled = false;
document.getElementById("stop").disabled = true;
document.getElementById("reset").disabled = true;

start.addEventListener("click",function(){
    let interval = setInterval(stopwatchDisplay,100);
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        document.getElementById("reset").disabled = false;
    stop.addEventListener("click",function(){
        clearInterval(interval);
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        document.getElementById("reset").disabled = false;
    });
    reset.addEventListener("click",function(){
        clearInterval(interval);
        display.innerHTML = "0<span style='font-size:20px'>:</span>0<span style='font-size:20px'>:</span>0<span style='font-size:20px'>:</span>0";
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        document.getElementById("reset").disabled = true;
    });
　},false);
 
  
  