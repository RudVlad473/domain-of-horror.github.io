class Vector {
    constructor(x, y) {
        let a = 3
        this.getA = () => {
            return a;
        }

        this.setA = (value) => {
            a = value
        }
    

        this.x = x
        this.y = y
    }

    plus(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y)
    }

    minus(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y)
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}

const v1 = new Vector(1, 2)
const v2 = new Vector(2, 3)

console.log(v1.getA())
console.log(v2.getA())

v1.setA(1488)

console.log(v1.getA())
console.log(v2.getA())
