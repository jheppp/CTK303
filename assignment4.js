let particles = [];
const numParticles = 100;

function setup() {
    const canvas = createCanvas(1920, 1080);
    canvas.parent("canvas-container");

    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(random(width), random(height)));
    }
}

function draw() {
    background(240);

    for (const particle of particles) {
        particle.update();
        particle.display();
    }
}

class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.size = random(5, 15);
        this.color = color(random(255), random(255), random(255), 150);
    }

    update() {
        this.pos.add(this.vel);

        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }

        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.size);
    }
}