//Obtencion de todos los botones de la calculadora
const oldValue = document.getElementById('oldValue')
const newValue = document.getElementById('newValue')
const buttons = document.querySelectorAll('.table--button')
const operators = document.querySelectorAll('.table--button__algebraic-operations')
const remove = document.getElementsByClassName('.table--button__reset')
const backspace = document.getElementsByClassName('.table--button__delete')
const result = document.getElementById('result')

const display = new Display(oldValue, newValue)

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        display.addNumber(button.innerText)
        // console.log(button.innerHTML)
    })
})

