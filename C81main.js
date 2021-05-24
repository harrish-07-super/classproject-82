canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var lastPositionx, lastPositiony;
color = "black";
width_of_line = 1;
radius=20;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
    console.log(mouseEvent);

}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUP";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Current position of x and y coordinates are");
        ctx.arc(current_position_x, current_position_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
    lastPositionx = current_position_x;
    lastPositiony = current_position_y;
}

