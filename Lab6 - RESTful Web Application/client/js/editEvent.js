var eventId = 0;

$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    eventId = urlParams.get('id');

    $.ajax({
        url: EVENT_URL + eventId,
        method: "get"
    })
    .done((data) => {
            $('#name').val(data[0].name);
            $('#description').val(data[0].description);
            $('#startDate').val(data[0].startDate);
            $('#startTime').val(data[0].startTime);
            $('#endDate').val(data[0].endDate);
            $('#endTime').val(data[0].endTime);
        }
        )
    .fail((err) => {
            console.log(err.responseText);
        }
    );

    $(".deleteEventBtn").click(()=>{
        $.ajax(
            {
                url: EVENT_URL +eventId,
                method: 'delete'
            }
        ).done((data)=>{
                alert("Event deleted!");
                window.location.href = "index.html";
            }
        ).fail((err)=>{
                console.log(err.responseText);
            }
        );
    });


});


function editEvent() {
    var event = {
        name: $("#name").val(),
        description: $("#description").val(),
        startDate: $("#startDate").val(),
        startTime: $("#startTime").val(),
        endDate: $("#endDate").val(),
        endTime: $("#endTime").val()
    };
    $.ajax(
        {
            url: EVENT_URL +eventId,
            method: 'put',
            data: event
        }
    ).done((data)=>{
            alert("Event updated!");
        }
    ).fail((err)=>{
           console.log(err.responseText);
        }
    );
    return false;
}

