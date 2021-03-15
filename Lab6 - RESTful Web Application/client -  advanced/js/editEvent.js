var eventId = 0;

$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    eventId = urlParams.get('id');

    axios.get(EVENT_URL + eventId)
    .then(response=>{
        let data = response.data;
        $('#name').val(data[0].name);
        $('#description').val(data[0].description);
        $('#startDate').val(data[0].startDate);
        $('#startTime').val(data[0].startTime);
        $('#endDate').val(data[0].endDate);
        $('#endTime').val(data[0].endTime);
    })
    .catch((err) => {
        console.log(err.responseText);
        }
    );

    $(".deleteEventBtn").click(()=>{
        axios.delete(EVENT_URL +eventId)
        .then(()=>{
            alert("Event deleted!");
            window.location.href = "index.html";
        })
        .catch((err)=>{
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
    axios.put(EVENT_URL +eventId,event)
    .then(()=>{
        alert("Event updated!");
    })
    .catch((err)=>{
           console.log(err.responseText);
        }
    );
    return false;
}

