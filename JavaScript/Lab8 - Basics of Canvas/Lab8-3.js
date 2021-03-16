$(document).ready(() => {
    let canvas = document.getElementById("myCanvas");
    let canvas2 = document.getElementById("myCanvas2");
    let ctx = canvas.getContext("2d");
    let ctx2 = canvas2.getContext("2d");
    let color = "black";	//the default color for fill / stroke
    let tool = "none";	//the selected tool “dot”, “line” or “eraser”
    let startDraw = false;	//to determine the drawing state
    let lineWidth = 3;	//setting for line width
    let circleRadius = 15;	//setting for circle radius

    let dragStartX = 0;
    let dragStartY = 0;
    let dragEndX = 0;
    let dragEndY = 0;

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
        startDraw = true;
        if (tool == "dot") {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(mouseX, mouseY, circleRadius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        }
        else if (tool == "line") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.moveTo(mouseX, mouseY);
        }
        else if (tool == "rectangle" || tool == "circle") {
            $(canvas2).show();
            dragStartX = mouseX;
            dragStartY = mouseY;
        }

        if (tool == "eraser") {
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

    canvas2.addEventListener("mousemove", (e) => {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        if (startDraw) {
            if (tool == "rectangle") {
                canvas2.width = canvas2.width;
                ctx2.beginPath();
                ctx2.lineWidth = lineWidth;
                ctx2.strokeStyle = color;
                ctx2.strokeRect(dragStartX, dragStartY, mouseX - dragStartX, mouseY - dragStartY);
                dragEndX = mouseX;
                dragEndY = mouseY;
                ctx2.closePath();
            } else if (tool=="circle") {
                canvas2.width = canvas2.width;
                ctx2.beginPath();
                ctx2.lineWidth = lineWidth;
                ctx2.strokeStyle = color;
                ctx2.arc(dragStartX,dragStartY,mouseX-dragStartX,0,2*Math.PI);
                ctx2.stroke();
                ctx2.closePath();
                dragEndX = mouseX;
                dragEndY = mouseY;
            }
        }
    })

    canvas2.addEventListener("mouseup", (e) => {
        startDraw = false;
        $(canvas2).hide();
        if (tool == "rectangle") {
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = color;
            ctx.strokeRect(dragStartX,dragStartY,dragEndX-dragStartX,dragEndY-dragStartY);
            dragStartX = 0;
            dragStartY = 0;
            dragEndX = 0;
            dragEndY = 0;
        } 
        if(tool == "circle") {
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = color;
            ctx.beginPath();
            ctx.arc(dragStartX,dragStartY,dragEndX-dragStartX,0,2*Math.PI);
            ctx.stroke();
            ctx.closePath();
            dragStartX = 0;
            dragStartY = 0;
            dragEndX = 0;
            dragEndY = 0;
        }
    })

    $(".clearBtn").click(() => {
        canvas.width = canvas.width;
    })


})
