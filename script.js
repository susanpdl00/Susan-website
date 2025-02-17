const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lines = [];
const numberOfLines = 50;
const speed = 2;

class Line {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 100 + 50;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * speed;
    }

    draw() {
        ctx.strokeStyle = rgba(0, 255, 0, ${Math.random() * 0.5}); // Green lines
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + Math.cos(this.angle) * this.length, this.y + Math.sin(this.angle) * this.length);
        ctx.stroke();
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Reset when out of bounds
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.angle = Math.random() * Math.PI * 2;
        }
    }
}

function init() {
    lines = [];
    for (let i = 0; i < numberOfLines; i++) {
        lines.push(new Line());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lines.forEach((line) => {
        line.draw();
        line.update();
    });
    requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

init();
animate();

