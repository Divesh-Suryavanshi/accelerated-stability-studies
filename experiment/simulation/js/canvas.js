const canvas = document.getElementById("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const c = canvas.getContext("2d");

c.fillStyle = "black";
c.rect(200, 200, 100, 100);
c.fill();

c.beginPath();

c.moveTo(400, 400); // neck left-top
c.lineTo(400, 440); // neck left-bottom

c.lineTo(340, 570); // base left

c.lineTo(490, 570); // base right

c.lineTo(430, 440); // neck right-bottom
c.lineTo(430, 400); // neck right-top
c.strokeStyle = "black";
c.stroke();

c.beginPath();
c.ellipse(415, 400, 15, 7, 0, 0, Math.PI * 2);
// c.arc(415, 400, 15, 0, Math.PI * 2);
c.strokeStyle = "black";
c.stroke();

c.beginPath();
c.arc(390, 437, 10, -Math.PI / 10, Math.PI / 6);
c.strokeStyle = "black";
c.stroke();
