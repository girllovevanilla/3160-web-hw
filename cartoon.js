window.onload = function() { 
    // Get the canvas element and its context
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // Draw the sky
    ctx.fillStyle = "#87cefa"; // Sky blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the sun
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();

    // Draw the mountains
    ctx.beginPath();
    ctx.moveTo(150, 600);
    ctx.lineTo(300, 300);
    ctx.lineTo(450, 600);
    ctx.closePath();
    ctx.fillStyle = "#a9a9a9"; // Dark gray
    ctx.fill();

    // Draw the ground
    ctx.fillStyle = "#90ee90"; // Light green
    ctx.fillRect(0, 500, canvas.width, canvas.height - 500);

    // Draw the house
    ctx.fillStyle = "#FF0000"; // Coral
    ctx.fillRect(500, 350, 250, 150);
    ctx.fillStyle = "#800080"; 
    ctx.fillRect(550, 400, 50, 50);
    ctx.fillRect(650, 400, 50, 50);
    ctx.fillStyle = "white";
    ctx.fillRect(600, 430, 50, 70);

    // Draw some caption text
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Welcome to My Cartoon!", 200, 50);

    // Draw some trees
 // get the canvas element
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// draw the trunk
ctx.fillStyle = '#663300';
ctx.fillRect(125, 200, 100, 300);

// draw the leaves
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(250, 200);
ctx.lineTo(175, 100);
ctx.closePath();
ctx.fillStyle = '#00cc00';
ctx.fill();
ctx.strokeStyle = '#006600';
ctx.lineWidth = 5;
ctx.stroke();

    // Draw some rocks
    ctx.fillStyle = "#696969"; // Dim gray
    for (var i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(600 + i * 50, 550, 20, 0, 2 * Math.PI);
    ctx.fill();
    }

    // Draw a fence
    ctx.strokeStyle = "brown";
    ctx.lineWidth = 5;
    ctx.beginPath();
    for (var i = 0; i < 7; i++) {
    ctx.moveTo(100 + i * 100, 500);
    ctx.lineTo(150 + i * 100, 500);
    }
    ctx.stroke();

};