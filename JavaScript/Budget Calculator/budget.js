let totalIncome = 0;
let totalExpenses = 0;
let btnId=0;

$(document).ready(()=>{
    $(".type").change(handleSelection);
    $(".tick_btn").click(handleInputs);
})

function handleSelection() {
    let typeValue = $(".type").val();
    if(typeValue=="plus") {
        $(".type, .description, .value, .tick_btn").addClass("plus");
        $(".type, .description, .value, .tick_btn").removeClass("minus");
    }
    else {
        $(".type, .description, .value, .tick_btn").addClass("minus");
        $(".type, .description, .value, .tick_btn").removeClass("plus");
    }
}

function handleInputs() {
    let typeValue = $(".type").val();
    let value = +$(".value").val();
    let description = $(".description").val();

    let entry = `
        <div class="details-breakdown">
            <span class="detail-description">${description}</span>
            <span class="detail-value">$${value}</span>
            <button id="${btnId}">Delete</button>
        </div>
    `;
    if(typeValue=="plus") {
        $(".income-list").append(entry);
        totalIncome+=value;
        $(".budget-income").text("$"+totalIncome);
    } else if (typeValue=="minus") {
        $(".expenses-list").append(entry);
        totalExpenses+=value;
        $(".budget-expenses").text("$"+totalExpenses);
    }
    $("#"+btnId).click((e)=>{
        if(typeValue=="plus") {
            totalIncome-=value;
            $(".budget-income").text("$"+totalIncome);
        } else if (typeValue=="minus") {
            totalExpenses-=value;
            $(".budget-expenses").text("$"+totalExpenses);
        }
        $(e.target.parentNode).remove();
    })
    btnId++;
    $(".description").val("");
    $(".value").val("");
}