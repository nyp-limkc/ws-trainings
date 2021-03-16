var raceGame = {
    racers: [
        {
            name: "John",
            speed: 6,
            distanceTravelled: 0,
            ended:false 
        },
        {
            name: "Tim",
            speed: 8,
            distanceTravelled: 0,
            ended:false 
        },
        {
            name: "Jane",
            speed: 5,
            distanceTravelled: 0,
            ended:false 
        }
    ],
    distance:40
}

var timer;
var ended=0;
timer = setInterval(trackRacers,1000);

function trackRacers() {
    for(var count=0;count<3;count++) {
        var racer = raceGame.racers[count];
        var speed = racer.speed;
        var randSpeed = Math.floor((Math.random() * speed) + 1);
        racer.distanceTravelled+=randSpeed;
        if(!racer.ended) {
            if(racer.distanceTravelled>=raceGame.distance) {
                racer.ended=true;
                ended++;
                console.log(racer.name+" has reached the end point with rank "+ended+"!");
                if(ended==3) {
                    clearInterval(timer);
                }
            }
            else {
                var distance = "";
                for(var i=0;i<racer.distanceTravelled;i++) {
                    distance+="*";
                }
                distance+=racer.name;
                console.log(distance);
            }
        }
    }
}