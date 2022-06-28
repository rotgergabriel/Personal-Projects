class Display {
    constructor(oldValue, newValue) {
        this.oldValue = oldValue
        this.newValue = newValue
        this.calculator = new Calculator()
        this.currentNumber = ''
        this.oldNumber = ''
    }

    addNumber(number) {
        this.currentNumber = this.currentNumber + number
        this.printValue()
    }

    printValue() {
        this.newValue.textContent = this.currentNumber
        this.oldValue.textContent = this.oldNumber
    }
}