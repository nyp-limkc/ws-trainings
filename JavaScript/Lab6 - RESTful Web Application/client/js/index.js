$(document).ready(function () {

    $.ajax({
        url: EVENT_URL,
        method: "get"
    })
    .done((data)=>{
        data.forEach(function(event) {
            $(".events").append(`
                <article>
                <h2><a href="editEvent.html?id=${event.id}">${event.name}</a></h2>
                <div>
                    ${event.description}<br>
                    Start: ${event.startDate} ${event.startTime}<br>
                    End: ${event.endDate} ${event.endTime}<br>
                </div>
                </article>
            `);
            })
        }
    )
    .fail((err)=>{
            console.log(err.responseText);
        }
    )

})

function addEvent() {
    let newEvent = {
        name: $("#name").val(),
        description: $("#description").val(),
        startDate: $("#startDate").val(),
        startTime: $("#startTime").val(),
        endDate: $("#endDate").val(),
        endTime: $("#endTime").val(),
    }

    $.ajax({
        url: EVENT_URL,
        method: "post",
        data: newEvent
    })
    .done((data)=>{
        alert(data.message);
        window.location.reload();
    })
    .fail((err)=>{
        console.log(err.responseText);
    })

    return false;
}
