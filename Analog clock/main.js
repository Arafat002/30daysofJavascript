function clockInit(){
    var date = new Date();
    var time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    var clockDivs = [document.getElementById("hours"), document.getElementById("minutes"), document.getElementById("seconds")];
    
    var hour = time[1]/2+time[0]*30;
    
    clockDivs[0].style.transform="rotate("+ hour +"deg)";
    clockDivs[1].style.transform="rotate("+ time[1]*6 +"deg)";
    clockDivs[2].style.transform="rotate("+ time[2]*6 +"deg)";
}

window.onload = function() {
    // Load clockInit function
    clockInit();
    
    // Call clockInit function at 1 second interval
    setInterval(clockInit, 1000);
};