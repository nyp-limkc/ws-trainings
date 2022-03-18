let currentTurn = "O";
let gameEnded = true;
let numClicks = 0;  // to keep track if there is a draw game

$(document).ready(() => {
    init();
})

function init() {
    //$("button") referenced all html button elements 
    $("button").attr("disabled", true);
    $("body").keypress((e) => {
        if (e.key == "S" || e.key == 's') {
            startGame();
        }
    })
}

function startGame() {
    if (gameEnded) {
        //reset all original game settings
        currentTurn = "O";
        gameEnded = false;
        numClicks = 0;
        $("p").hide();
        $(".message").text("Player 1's turn");

        $("button").click(changeCell);
        $("button").attr("disabled", false);
        $("button").text(" ");
        $("button").css("border", "0.5px solid gray");
    }
}

function changeCell(e) {
    $(e.target).text(currentTurn);
    numClicks++;
    checkCells();
    if (!gameEnded) {
        //current player is P1
        if (currentTurn == "O") {
            $(".message").text("Player 2's turn");
            currentTurn = "X";
        } else {    //current player is P2
            $(".message").text("Player 1's turn");
            currentTurn = "O";
        }
    }

    e.target.disabled = true;
}

function checkCells() {
    if (check3Cells(0, 1, 2)) {
        endGame(0, 1, 2);
    } else if (check3Cells(3, 4, 5)) {
        endGame(3, 4, 5);
    } else if (check3Cells(6, 7, 8)) {
        endGame(6, 7, 8);
    } else if (check3Cells(0, 3, 6)) {
        endGame(0, 3, 6);
    } else if (check3Cells(1, 4, 7)) {
        endGame(1, 4, 7);
    } else if (check3Cells(2, 5, 8)) {
        endGame(2, 5, 8);
    } else if (check3Cells(0, 4, 8)) {
        endGame(0, 4, 8);
    } else if (check3Cells(2, 4, 6)) {
        endGame(2, 4, 6);
    } else if (numClicks == 9) {    //means click all 9 cells already but haven't found a winner, ie, a draw game.
        var buttons = $("button");
        $("p").show();
        $(".message").text("It is a draw game!");
        gameEnded = true;
        $(buttons).attr("disabled", true);
        //remove existing attached click listeners
        $(buttons).unbind();
    }
}

function check3Cells(cell1, cell2, cell3) {
    var buttons = $("button");
    return $(buttons[cell1]).text() == currentTurn &&
        $(buttons[cell2]).text() == currentTurn &&
        $(buttons[cell3]).text() == currentTurn;
}

function endGame(cell1, cell2, cell3) {
    var buttons = $("button");
    $("p").show();
    if (currentTurn == "O") {
        $(".message").text("Player 1 won the game!");
    } else {
        $(".message").text("Player 2 won the game!");
    }
    gameEnded = true;
    $(buttons[cell1]).css("border", "2px solid red");
    $(buttons[cell2]).css("border", "2px solid red");
    $(buttons[cell3]).css("border", "2px solid red");

    $(buttons).attr("disabled", true);
    //remove existing attached click listeners
    $(buttons).unbind();
}