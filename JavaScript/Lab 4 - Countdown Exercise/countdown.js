var secondsRemaining;
var intervalHandle;

$(document).ready(()=>{
    $(".startCountDownBtn").click(function() {
        startCountdown();
    });
})


function resetPage() {
    $("#inputArea").show();
    $("#time").css("color","black");
}

function tick() {    
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    
    if(secondsRemaining === 9){
        $("#time").css("color","red");
    }
    
    if (sec < 10) {
        sec = "0" + sec;
    }
    var message = min + ":" + sec;
    $("#time").text(message);
    
    
    if (secondsRemaining === 0) {
        alert("Done!");
        clearInterval(intervalHandle);
        resetPage();
    }
    secondsRemaining--;
}

function startCountdown() {
    var minutes = +$("#minutes").val();
    secondsRemaining =  minutes * 60;
    intervalHandle = setInterval(tick, 1000);
    $("#inputArea").hide();
}


