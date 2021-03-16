let currentTurn = "O";
let gameEnd = false;

$(document).ready(()=>{
    init();
})

function init() {
    let buttons = $("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    $("body").keypress((e)=>{
        if (e.key == "S" || e.key == 's') {
            startGame();
        }
    })
}

function startGame() {
    gameEnd = false;
    currentTurn = "O";
    $("p").hide();
    $(".message").text("Player 1's turn");
    $("button").click(changeCell);
    $("button").text(" ");
    $("button").css("border", "0.5px solid gray");
    $("button").attr("disabled",false);
}

function changeCell(e) {
    $(e.target).text(currentTurn);
    checkCells();
    if (currentTurn == "O") {
        if (!gameEnd) {
            $(".message").text("Player 2's turn");
            currentTurn = "X";
        }
    } else {
        if (!gameEnd) {
            $(".message").text("Player 1's turn");
            currentTurn = "O";
        }
    }
    // e.target.disabled = true;
    $(e.target).attr("disabled",true);
}
function checkCells() {
    var buttons = $("button");
    if (check3Cells(buttons,0,1,2)) {
        endGame(buttons[0],buttons[1],buttons[2]);
    } else if (check3Cells(buttons,3,4,5)) {
        endGame(buttons[3],buttons[4],buttons[5]);
    } else if (check3Cells(buttons,6,7,8)) {
        endGame(buttons[6],buttons[7],buttons[8]);
    } else if (check3Cells(buttons,0,3,6)) {
        endGame(buttons[0],buttons[3],buttons[6]);
    } else if (check3Cells(buttons,1,4,7)) {
        endGame(buttons[1],buttons[4],buttons[7]);
    } else if (check3Cells(buttons,2,5,8)) {
        endGame(buttons[2],buttons[5],buttons[8]);
    } else if (check3Cells(buttons,0,4,8)) {
        endGame(buttons[0],buttons[4],buttons[8]);
    } else if (check3Cells(buttons,2,4,6)) {
        endGame(buttons[2],buttons[4],buttons[6]);
    } else {
        var allClicked = true;
        for (var i = 0; i < buttons.length; i++) {
            if ($(buttons[i]).text() == " ") {
                allClicked = false;
                break;
            }
        }
        if (allClicked) {
            $("p").show();
            $(".message").text("It is a draw game!");
            gameEnd = true;
            $(buttons).attr("disabled",true);
        }
    }
}
function check3Cells(buttons, cell1, cell2, cell3) {
    return $(buttons[cell1]).text() == currentTurn && 
            $(buttons[cell2]).text() == currentTurn && 
            $(buttons[cell3]).text() == currentTurn;
}

function endGame(button1,button2,button3) {
    $("p").show();
    if (currentTurn == "O") {
        $(".message").text("Player 1 won the game!");
    } else {
        $(".message").text("Player 2 won the game!");
    }
    gameEnd = true;
    
    $(button1).css("border", "2px solid red");
    $(button2).css("border", "2px solid red");
    $(button3).css("border", "2px solid red");
    
    var buttons = $("button");
    $(buttons).attr("disabled",true);
    //remove existing attached click listeners
    $(buttons).unbind(); 
}