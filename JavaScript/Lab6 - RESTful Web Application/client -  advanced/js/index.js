$(document).ready(function () {

    axios.get(EVENT_URL)
    .then(response=>{
        let data = response.data;
        console.log(response);
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
    })
    .catch(err=>{
        console.log(err.response.data);
    })


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
    axios.post(EVENT_URL,newEvent)
    .then((response)=>{
        alert(response.data.message);
        window.location.reload();
    })
    .catch((err)=>{
        console.log(err.response.data);
    })

    return false;
}
