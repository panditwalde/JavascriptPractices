


let buttons = document.querySelectorAll('button')
let screenDisplay = document.querySelector('.screen')

let calculation = []
let accumlativeCalculation
function calculate(button) {

    let value = button.textContent

    console.log(value);

    if (value === "CLEAR") {
        calculation = []
        screenDisplay.textContent = '.'

    }
    else if (value === "=") {

        screenDisplay.textContent=eval(accumlativeCalculation)
        

    }
    else {

        calculation.push(value)
        accumlativeCalculation=calculation.join("")
        screenDisplay.textContent=accumlativeCalculation


    }

}


buttons.forEach((button) => button.addEventListener('click', () => calculate(button)))