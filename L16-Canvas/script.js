let canvas = document.getElementById('mycanvas');

let ctx = canvas.getContext('2d'); // Pen to draw

function drawRectangle(rectObj, color = "black") {
    const { x, y, l, h } = rectObj;

    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, l, h);
}

function drawTriangle(triangleObj, color) {
    const { x, y, x1, y1, x2, y2 } = triangleObj;
    ctx.beginPath();
    ctx.strokeStyle = color || 'black';
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
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
    { x: 50, y: 60, x1: 100, y1: 200, shape: 'line', color: 'purple' },
    { x: 160, y: 190, x1: 280, y1: 220, x2: 80, y2: 90, shape: 'triangle', color: 'magenta' },
]

allShapes.forEach(function (data, index, arr) {
    if (data.shape === 'reactangle') {
        drawRectangle(data, data.color);
    }
    else if (data.shape == 'line') {
        drawLine(data, data.color);
    }
    else if (data.shape == 'triangle') {
        drawTriangle(data, data.color);
    }
});


function refreshShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    allShapes.forEach(function (data, index, arr) {
        if (data.shape === 'reactangle') {
            drawRectangle(data, data.color);
        }
        else if (data.shape == 'line') {
            drawLine(data, data.color);
        }
        else if (data.shape == 'triangle') {
            drawTriangle(data, data.color);
        }
        else if (data.shape == 'freehand') {
            freehand(data, data.color);
        }
    })
}

function freehand(freehandObj, color) {
    let { points } = freehandObj;
    ctx.beginPath();
    ctx.strokeStyle = color || 'black';
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y)
        ctx.stroke();
    }
    ctx.closePath();
}

let isFreeHand = false;
let freeHandPoints = [];
canvas.addEventListener('mousedown', (ev) => {
    console.log(ev.clientX, ev.clientY);
    isFreeHand = true;
    freeHandPoints = [];
})

function temporaryDraw(points, color) {
    if (points.length <= 0) return;
    ctx.beginPath();
    ctx.strokeStyle = color || 'black';
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y)
        ctx.stroke();
    }
    ctx.closePath();
}

canvas.addEventListener('mousemove', (ev) => {
    if (!isFreeHand) return;
    // console.log(ev.clientX, ev.clientY);
    freeHandPoints.push({ x: ev.clientX, y: ev.clientY });
    temporaryDraw(freeHandPoints, 'black');
})

canvas.addEventListener('mouseup', (ev) => {
    // console.log(ev.clientX, ev.clientY);
    isFreeHand = false;
    console.log(freeHandPoints)
    let freeHandObj = {
        points: freeHandPoints,
        color: 'black',
        shape: 'freehand'
    }
    allShapes.push(freeHandObj)
    refreshShapes();
    temporaryDraw([], 'black');
})
