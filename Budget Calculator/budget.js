var totalIncome = 0;
var totalExpenses = 0;
var btnId=0;

$(document).ready(()=>{
    init();
})

function init() {
    $(".type").change(handleSelection);
    $("body").keypress((e)=>{

        if(e.target.tagName=="INPUT" && (e.key=="-" || e.key=="+")) {
            e.preventDefault();
        }
        if(e.key=="-") {
            $(".type").val("minus");
        } else if(e.key=="+") {
            $(".type").val("plus");
        }

        handleSelection();
    })

    $("input").keypress((e)=>{
        if(e.key=="Enter") {
            handleInputs();
        }
    })
}

function handleSelection() {
    var typeValue = $('.type').val();
    if (typeValue == "plus") {
        $(".add_container").children().each(function(){
            $(this).addClass("plus");
            $(this).removeClass("minus");
        })
    } else if (typeValue == "minus") {
        $(".add_container").children().each(function(){
            $(this).addClass("minus");
            $(this).removeClass("plus");
        })
    }
}

function handleInputs() {
    var typeValue = $(".type").val();
    var value = $(".value").val();

    var description = $(".description").val();

    if(description=="" || value=="") {
        alert("Please do not leave any blank input.");
        return;
    }

    var entry = `
    <div class='details-breakdown'>
        <span class='detail-description'>${description}</span>
        <span class='detail-value'>$${value}</span>  
        <button id='${btnId}'>Delete</button>      
    </div>
    `

    if (typeValue == "plus") {
        $(".income-list").append(entry);
    } else if (typeValue == "minus") {
        $(".expenses-list").append(entry);
    }
    $(`#${btnId++}`).click((e)=>{
        removeItem(e);
        refreshBudget(typeValue,value*-1);
    })
    
    refreshBudget(typeValue,+value);
    $(".description").val("");
    $(".value").val("");
}

function removeItem(e) {
    $(e.target).parent().remove();
}
function refreshBudget(operation,amount) {
    if(operation=="plus") {
        totalIncome+=amount;
        $(".budget-income").text("$"+totalIncome);
    } else if(operation=="minus") {
        totalExpenses+=amount;
        $(".budget-expenses").text("$"+totalExpenses);
    }

    var balance = totalIncome-totalExpenses;
    $(".budget-balance").text("$"+balance);
    if( balance < 0) {
        $(".budget-balance").css("color","red");
    }
    else if( balance > 0){
        $(".budget-balance").css("color","green");
    }
    else {
        $(".budget-balance").css("color","black");
    }
 
}
