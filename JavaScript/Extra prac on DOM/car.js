let cars = [
    {
        "model": "Toyota Camry",
        "rentalCost": 59,
        "driver": {
            "name": "Thomas",
            "licenseID": "S9776446A",
            "contactNumber": 99559779
        }
    },
    {
        "model": "Chevrolet Traverse",
        "rentalCost": 107,
        "driver": undefined
    },
    {
        "model": "Honda Accord",
        "rentalCost": 102,
        "driver": {
            "name": "Joanne",
            "licenseID": "S9102416A",
            "contactNumber": 96886969
        }
    },
    {
        "model": "Subaru Crosstrek",
        "rentalCost": 108,
        "driver": {
            "name": "Christine",
            "licenseID": "S9592091A",
            "contactNumber": 90520166
        }
    },
    {
        "model": "Nissan Leaf",
        "rentalCost": 67,
        "driver": undefined
    },
    {
        "model": "Volkswagen Tiguan",
        "rentalCost": 89,
        "driver": {
            "name": "Alvin",
            "licenseID": "S9922372A",
            "contactNumber": 98238643
        }
    }
]
$(document).ready(() => {
    // for(var index=0;index<cars.length;index++) {
    //     var car = cars[index];
    // }
    cars.forEach((car,index)=>{
        $(".cars").append(
            `<article class="car" id="car${index}">
                <h1>${car.model}</h1>
                <p>
                    $${car.rentalCost}
                </p>
            </article>`);
        
        if(car.driver!=undefined) {
            $(`#car${index}`).append(
                `
                <button class="showInfoBtn">Show Driver Info</button><br>
                <div class="driverInfo">
                    Driver Name: ${car.driver.name}<br>
                    License ID: ${car.driver.licenseID} <br>
                    Contact number: ${car.driver.contactNumber}
                </div>
                `
            );
        } else {
            $(`#car${index}`).append("<p>No driver assigned</p>");
        }

        $(`#car${index} .showInfoBtn`).click(()=>{
            $(`#car${index} .driverInfo`).show();
        })
    })
})