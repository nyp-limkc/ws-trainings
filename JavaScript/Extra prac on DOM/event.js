let events = [
    {
        "name": "Event 1",
        "organizer": "ABC Company",
        "datetime" :{
            "date":"16/06/2019",
            "start":"7:30 PM",
            "end":"9:30 PM"
        },
        "description":
        "Lorem ipsum dolor sit amet consectetur adipisicing"+
         "elit. Laboriosam sunt, officiis illo autem voluptas sint quos facere."+ 
         "Velit tempore eaque sunt obcaecati suscipit itaque laborum veniam fuga, ipsam id excepturi."
         ,
         "tickets": {
             "vip": 150,
             "cat1": 120,
             "cat2": 100
         }
    },
    {
        "name": "Event 2",
        "organizer": "ZZZ Company",
        "datetime" :{
            "date":"03/08/2019",
            "start":"9:30 AM",
            "end":"11:00 AM"
        },
        "description":
        "Lorem ipsum dolor sit amet consectetur adipisicing"+
         "elit. Laboriosam sunt, officiis illo autem voluptas sint quos facere."+ 
         "Velit tempore eaque sunt obcaecati suscipit itaque laborum veniam fuga, ipsam id excepturi."
         ,
         "tickets": {
             "vip": 210,
             "cat1": 180,
             "cat2": 140
         }
    },
    {
        "name": "Event 3",
        "organizer": "XYZ Company",
        "datetime" :{
            "date":"25/07/2019",
            "start":"1:00 PM",
            "end":"5:00 PM"
        },
        "description":
        "Lorem ipsum dolor sit amet consectetur adipisicing"+
         "elit. Laboriosam sunt, officiis illo autem voluptas sint quos facere."+ 
         "Velit tempore eaque sunt obcaecati suscipit itaque laborum veniam fuga, ipsam id excepturi."
         ,
         "tickets": {
             "vip": 120,
             "cat1": 100,
             "cat2": 70
         }
    },
    {
        "name": "Event 4",
        "organizer": "John Company",
        "datetime" :{
            "date":"05/10/2019",
            "start":"4:00 PM",
            "end":"8:00 PM"
        },
        "description":
        "Lorem ipsum dolor sit amet consectetur adipisicing"+
         "elit. Laboriosam sunt, officiis illo autem voluptas sint quos facere."+ 
         "Velit tempore eaque sunt obcaecati suscipit itaque laborum veniam fuga, ipsam id excepturi."
         ,
         "tickets": {
             "vip": 160,
             "cat1": 130,
             "cat2": 100
         }
    },
    {
        "name": "Event 5",
        "organizer": "David Company",
        "datetime" :{
            "date":"30/07/2019",
            "start":"9:00 AM",
            "end":"7:00 PM"
        },
        "description":
        "Lorem ipsum dolor sit amet consectetur adipisicing"+
         "elit. Laboriosam sunt, officiis illo autem voluptas sint quos facere."+ 
         "Velit tempore eaque sunt obcaecati suscipit itaque laborum veniam fuga, ipsam id excepturi."
         ,
         "tickets": {
             "vip": 300,
             "cat1": 240,
             "cat2": 200
         }
    },
]

$(document).ready(()=>{
    events.forEach(event=>{
        $(".events").append(`
        <article class="event">
            <aside class="eventInfo">
                <h1>${event.name}</h1>
                <div>${event.organizer}</div>
                <div class="eventDateTime">
                    <span>${event.datetime.date}</span>
                    <span>${event.datetime.start}</span>
                    <span>${event.datetime.end}</span>
                </div>
            </aside>
            <p class="eventDescription">
                ${event.description}
            </p>
            <article class="tickets">
                <span class="vip">VIP Tickets $${event.tickets.vip}</span>
                <span class="cat1">Category 1 Tickets $${event.tickets.cat1}</span>
                <span class="cat2">Category 2 Tickets $${event.tickets.cat2}</span>
            </article>
        </article>        
        
        
        `)
    })
})