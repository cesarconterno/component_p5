export const Sketch = (p) => {

    let x = 1;
    let y = 1;
    let easing = 0.05;

    p.setup = () => {
        p.createCanvas(300, 300);
        p.noStroke();
    }

    p.draw = () => {
        p.background(0, 0, 0);
        let targetX = p.mouseX;
        let dx = targetX - x;
        x += dx * easing;

        let targetY = p.mouseY;
        let dy = targetY - y;
        y += dy * easing;
        p.rect(x, y, 10, 63);
        p.rect(x - 15, y + 10, 40, 10);
    }
}