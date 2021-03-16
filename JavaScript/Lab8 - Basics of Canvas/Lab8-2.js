$(document).ready(() => {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let color = "black";	//the default color for fill / stroke
    let tool = "none";	//the selected tool “dot”, “line” or “eraser”
    let startDraw = false;	//to determine the drawing state
    let lineWidth = 3;	//setting for line width
    let circleRadius = 15;	//setting for circle radius

    $(".colorChoice").change((e) => {
        color = $(e.target).val()
    })

    $(".tool").change((e) => {
        tool = $(e.target).val();
    })

    $("#lineWidthRange").change((e)=>{
        let val = $(e.target).val();
        $(".lineWidthVal").text(val);
        lineWidth = val;
    })

    $("#circleRadius").change((e) => {
        let val = $(e.target).val();
        $(".circleRadiusVal").text(val);
        circleRadius = val;
    })

    canvas.addEventListener("mousedown", (e) => {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        ctx.lineWidth = lineWidth;
        if (tool == "dot") {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(mouseX, mouseY, circleRadius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        }
        else if (tool == "line") {
            startDraw = true;
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.moveTo(mouseX, mouseY);
        }

        if (tool == "eraser") {
            startDraw = true;
            ctx.globalCompositeOperation = "destination-out";
        } else {
            ctx.globalCompositeOperation = "source-over";
        }

    })

    canvas.addEventListener("mousemove", (e) => {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;

        if (startDraw) {
            if (tool == "line") {
                ctx.lineTo(mouseX, mouseY);
                ctx.stroke();
            }
            else if (tool == "eraser") {
                ctx.beginPath();
                ctx.arc(mouseX, mouseY, circleRadius, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
            }
        }
    })

    canvas.addEventListener("mouseup", (e) => {
        startDraw = false;
    })


    $(".clearBtn").click(() => {
        canvas.width = canvas.width;
    })


})
