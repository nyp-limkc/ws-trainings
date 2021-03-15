$(document).ready(() => {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 50, 50);


    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";
    ctx.strokeRect(8, 8, 54, 54);

    ctx.clearRect(30, 30, 15, 15);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(100, 30);
    ctx.lineTo(120, 10);
    ctx.lineTo(190, 40);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "#A2A2A2";
    ctx.arc(150, 150, 30, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();


    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(255, 165, 0)";
    ctx.arc(90, 250, 50, Math.PI / 4, Math.PI, true);
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.font = "40px serif";
    ctx.fillText("Hello", 300, 50);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.strokeText("World", 300, 90);


    let image = new Image();
    image.src = "https://mdn.mozillademos.org/files/5395/backdrop.png";
    image.onload = () => {
        ctx.drawImage(image, 200, 200);
    }


})