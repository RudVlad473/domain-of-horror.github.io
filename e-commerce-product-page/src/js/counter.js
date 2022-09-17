export default class Counter {
    constructor(DOMcounter) {
        this.counter = DOMcounter
        // this.counterValue = this.counter.querySelector(".counter__value")
        this.counterPlus = this.counter.querySelector(".counter__plus")
        this.counterMinus = this.counter.querySelector(".counter__minus")

        this.minValue = 1
        this.maxValue = 100

        this.counterPlus.addEventListener("click", () => this.increment())
        this.counterMinus.addEventListener("click", () => this.decrement())
    }

    increment() {
        const DOMvalue = this.getDOMvalue()
        return +DOMvalue.innerHTML < this.maxValue
            ? ++DOMvalue.innerHTML
            : false
    }

    decrement() {
        const DOMvalue = this.getDOMvalue()
        return +DOMvalue.innerHTML > this.minValue
            ? --DOMvalue.innerHTML
            : false
    }

    getDOMvalue() {
        return this.counter.querySelector(".counter__value")
    }

    getParseIntValue() {
        return +this.counter.querySelector(".counter__value").innerHTML
    }
}
