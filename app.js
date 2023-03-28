const screenDisplay = document.querySelector(".screen")
const buttons = document.querySelectorAll("button")

let calculatoin = []
let accumulativeCalculation 

function calculate(button) {
    const value = button.textContent
    
    if (value === "CLEAR") {
        calculatoin = []
        screenDisplay.textContent = "."
    } else if (value === "=") {
        screenDisplay.textContent = eval(accumulativeCalculation)
    } else {
        calculatoin.push(value)
        accumulativeCalculation = calculatoin.join('')
        screenDisplay.textContent = accumulativeCalculation 
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
