class Display {
    constructor(oldValue, newValue) {
        this.oldValue = oldValue
        this.newValue = newValue
        this.calculator = new Calculator()
        this.operationType = undefined
        this.currentNumber = ''
        this.oldNumber = ''
        this.sings = {
            sum: '+',
            rest: '-',
            split: '/',
            multiply: '*',
            percentage: '%'
        }
    }

    delete() {
        this.currentNumber = this.currentNumber.toString().slice(0, -1)
        this.printValue()
    }

    deleteAll() {
        this.currentNumber = ''
        this.oldNumber = ''
        this.operationType = undefined
        this.printValue()
    } 

    compute(type) {
        this.operationType !== 'result' && this.calculate()
        this.operationType = type
        this.oldNumber = (this.currentNumber || this.oldNumber)
        this.currentNumber = ''
        this.printValue()
    }

    addNumber(number) {
        if (number === '.' && this.currentNumber.includes('.')) return
        this.currentNumber = this.currentNumber.toString() + number.toString()
        this.printValue()
    }

    printValue() {
        this.newValue.textContent = this.currentNumber
        this.oldValue.textContent = `${this.oldNumber} ${this.sings[this.operationType] || ''}`
    }

    calculate() {
        const currentNumber = parseFloat(this.currentNumber)
        const oldNumber = parseFloat(this.oldNumber)

        if( isNaN(currentNumber) || isNaN(oldNumber)) return

        this.currentNumber = this.calculator[this.operationType](oldNumber, currentNumber)
    }
}