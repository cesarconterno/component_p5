export const Sketch = (p) => {
    
    p.setup = () => {
        p.createCanvas(500, 500)
    }
    p.draw = () => {
        p.stroke(127)
        p.strokeWeight(10)
        for (let posX = 1; posX <= 10; posX++) {
            p.line(posX * 25, 0, posX * 25, height / 2)
        }
        p.noStroke()
        p.fill("#ffd700")
        for (let posX = 0; posX < 10; posX++) {
            for (let posY = 0; posY < 10; posY++) {
                if (posX % 2 === 0) {
                    p.circle(posX * 25 + width / 2 + 25, posY * 25 + 12, 10)
                }
                if (posX % 2 !== 0) p.circle(posX * 25 + width / 2 + 25, posY * 25, 10)

            }
        }
        for (posX = 0; posX < 10; posX++) {
            for (posY = 0; posY < 10; posY++) {
                if ((posX % 2) ^ (posY % 2) === 0) {
                    p.fill("red")
                } else {
                    p.fill(255)
                }
                p.square(posX * 25, height / 2 + posY * 25, 25)
            }
        }

        p.strokeWeight(10)
        p.stroke("blue")
        for (posX = 1; posX <= 10; posX++) {
            p.line(width / 2, height - 25 * posX, width / 2 + 25 * posX, height)
        }
        for (posX = 0; posX < 10; posX++) {
            p.line(width / 2 + 25 * posX, height / 2, width, height - 25 * posX)
        }
        p.stroke(0)
        p.strokeWeight(10)
        p.line(0, 0, 0, height)
        p.line(0, 0, width, 0)
        p.line(0, height, width, height)
        p.line(width, 0, width, height)
        p.line(width / 2, 0, width / 2, height)
        p.line(0, height / 2, width, height / 2)
    }
}

