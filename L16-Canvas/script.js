let canvas = document.getElementById('mycanvas');

let ctx = canvas.getContext('2d'); // Pen to draw

function drawRectangle(rectObj, color = "black") {
    const { x, y, l, h } = rectObj;

    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, l, h);
}


function drawFilledRectangle(rectObj, color = "black") {
    const { x, y, l, h } = rectObj;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, l, h);
}

function drawLine(lineObj, color) {
    const { x, y, x1, y1 } = lineObj;
    ctx.beginPath();
    ctx.strokeStyle = color || 'black';
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.closePath();
}

let allShapes = [
    { x: 10, y: 20, l: 50, h: 50, shape: 'reactangle', color: 'black' },
    { x: 100, y: 210, l: 150, h: 50, shape: 'reactangle', color: 'red' },
    { x: 120, y: 310, l: 150, h: 50, shape: 'reactangle', color: 'orange' },
    { x: 50, y: 60, x1: 100, y1: 200, shape: 'line', color: 'purple' }
]

allShapes.forEach(function (data, index, arr) {
    if (data.shape === 'reactangle') {
        drawRectangle(data, data.color);
    }
    else if (data.shape == 'line') {
        drawLine(data, data.color);
    }
});