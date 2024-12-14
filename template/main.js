/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");


/** @param {number[][]} */
function drawRail(rail) {}

ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();
ctx.moveTo(50, 50);
ctx.quadraticCurveTo(50, 60, 60, 60);
ctx.lineTo(70, 60);
ctx.stroke();