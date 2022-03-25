let numOfTries = 0;
let numOfHits = 0;
let guesses = [false,false,false,false,false,false,false,false,false];

$(document).ready(()=>{
    $(".startBtn").click(startGame);
    $(".guessBtn").click(handleInputs);
})

function startGame() {
    $(".inputSection").show();
    $(".message").text("");
    numOfHits=0;
    numOfTries=0;
    $(".battleLoc").removeClass("hit");
    $(".battleLoc").removeClass("miss");
}
function handleInputs() {
    let guess = +$("#guess").val();
    if(guess<1 || guess>9) {
        $(".message").text("Please make a guess between 1 to 9");
    } else {
        if(guesses[guess-1]) {
            $(".message").text("You have already guessed this location.");
            return;
        } else {
            guesses[guess-1]=true;
        }
        numOfTries++;
        if(guess==3 || guess==6 || guess==9) {
            $(".message").text("Hit!");
            $("#location"+guess).addClass("hit");
            numOfHits++;
            if(numOfHits==3) {
                $(".message").text(`Battleship game ended! You took ${numOfTries} tries.`);
                $(".inputSection").hide();
            }
        } else {
            $(".message").text("Miss!");
            $("#location"+guess).addClass("miss");
        }
    }
    $("#guess").val("");
}