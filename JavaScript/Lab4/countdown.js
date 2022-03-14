let secondsRemaining;
let intervalHandle;

$(document).ready(()=>{
    $(".startCountDownBtn").click(startCountdown);  

})
function tick() {
    let min = Math.floor(secondsRemaining/60); 
    let sec = secondsRemaining - min*60; 
    if(sec<10) {
        sec = "0"+sec;
    }

    if(secondsRemaining==9) {
        $("#time").css("color","red");
    }

    
    if (secondsRemaining == 0) {
        alert("Countdown done!");
        clearInterval(intervalHandle);
        $("#inputArea").show();
        $("#time").css("color","black");
    }
    $("#time").text(min+":"+sec);
    secondsRemaining--;
}
function startCountdown() {
    let minutes = $("#minutes").val();
    secondsRemaining = minutes*60;
    intervalHandle =setInterval(tick,1000);
    $("#inputArea").hide();
}