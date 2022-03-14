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

var timer = setInterval(trackRacers,1000);
var rank = 0;

function trackRacers() {
    /**
     * Move each racer by X number of distance
     *      where x = random number between 1 & max speed of racer
     * Increment racer's distance travelled by X
     * if( distance travelled < expected distance)
     *      Print distanced travelled (****** + racer's name)
     * else 
     *      Print "this racer has reached the end... with rank N"
     */

     for(var count=0;count<3;count++) {
        var racer = raceGame.racers[count];
        var speed = racer.speed;
        var randSpeed = Math.floor((Math.random() * speed) + 1);
        racer.distanceTravelled+=randSpeed;
        if(!racer.ended) {
            if(racer.distanceTravelled>=raceGame.distance) {
                racer.ended=true;
                rank++;
                console.log(racer.name+" has reached the end point with rank "+rank+"!");
                if(rank==3) {
                    clearInterval(timer);
                }
            } else {
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

