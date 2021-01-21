var square = {
    length: 5,
    color: "red",
    getArea: function() {
        return this.length * this.length;
    }
}
console.log(square.getArea());

var square2 = {
    length: 5,
    color: "red",
    getArea: function() {
        return this.length * this.length;
    },
    compare: function(sq) {
        return (this.length==sq.length && this.color==sq.color);
    } 
}

console.log(square2.compare(square));


var obj = {
    doSomething: ()=>{
        //some codes
    }
}

var obj = {
    doSomething() {
        //some codes
    }
}