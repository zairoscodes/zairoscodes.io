let drawing = [];

function setup() {
    createCanvas(600, 400);
    background(255);
}

function draw() {
    for (let i = 0; i < drawing.length; i++) {
        stroke(0);
        strokeWeight(4);
        point(drawing[i].x, drawing[i].y);
    }
}

function mouseDragged() {
    drawing.push({x: mouseX, y: mouseY});
}

function keyPressed() {
    if (key === 'C' || key === 'c') {
        drawing = [];
        background(255);
    }
}
