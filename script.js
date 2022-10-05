const btns = document.querySelectorAll("button");
const display = document.getElementById("display");
const currentDisplayValue = document.querySelector("#current");
const previousDisplayValue = document.querySelector("#previous");
const equals = document.querySelector("#enter");
const operationBtns = document.querySelectorAll('[data-operation]')
const numberBtns = document.querySelectorAll('[data-number]')
const ac = document.querySelector("#ac");
console.log(operationBtns)
currentValue = ""
oldValue = ""
clear();
operation = undefined
const add = (...oldValue) => {
    oldValue
}

const subtract = function (num){
    return num.reduce((prevValue,currentValue) => prevValue - currentValue);
};

const multiply = function(num){
    return num.reduce((prevValue,currentValue) => prevValue*currentValue);
};

const divide = function(num){
    return num.reduce((prevValue,currentValue) => prevValue/currentValue);
};
function appendNumber(number) {
    if(number === "." && currentValue.includes (".")) return
    currentValue = currentValue.toString() + number.toString();
};

function chooseOperation(operation){
    if(currentValue === "") return
    if(oldValue !== ""){
        operate()
    }
    newOperation = operation
    oldValue = currentValue
    currentValue = ""
}

function updateDisplay(){
    currentDisplayValue.textContent = currentValue;
    previousDisplayValue.textContent = oldValue;
}

function operate(){
    let computation
    const oldVal = parseFloat(oldValue)
    const newVal = parseFloat(currentValue)
    if(isNaN(oldVal) || isNaN(newVal)) return
    switch (newOperation){
        case "+":
            computation = oldVal + newVal
            break;
        case "-":
            computation = oldVal - newVal
            break;
        case "*":
            computation = oldVal * newVal
            break;
        case "/":
            computation = oldVal / newVal
            break;
        default:
            return
    }
    currentValue = computation
    operation = undefined
    oldValue = ""
};

function clear(){
    currentDisplayValue.textContent = "";
    previousDisplayValue.textContent = "";
    operation = undefined;
    oldValue = ""
    currentValue = ""
}

for (const oBtn of operationBtns){
    oBtn.addEventListener("click", () => {
        chooseOperation(oBtn.innerText)
        updateDisplay();
    })
}

equals.addEventListener("click",()=>{
    operate()
    updateDisplay()
})

ac.addEventListener("click",()=>{
    clear();
})

for (const nBtn of numberBtns){
    nBtn.addEventListener("click", () => {
        appendNumber(nBtn.innerText);
        updateDisplay();
    })
}
