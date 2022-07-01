//Obtencion de todos los botones de la calculadora
const oldValue = document.getElementById('oldValue')
const newValue = document.getElementById('newValue')
const buttons = document.querySelectorAll('.table--button')
const operators = document.querySelectorAll('.table--button__algebraic-operations')

const display = new Display(oldValue, newValue)

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        display.addNumber(button.innerText)
        // console.log(button.innerText)
    })
})

operators.forEach( button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        display.compute(button.value)
    } )
})

document.addEventListener('keydown', (e) => {
    e.preventDefault()
    const keyValue = e.key
    display.addNumber(keyValue)
})


