const numbers = document.querySelectorAll('.numbers');
const result = document.querySelectorAll('.result');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelectorAll('.equals'); 
const clear = document.querySelectorAll('.clear');
const negative = document.querySelectorAll('.negative');
const percent = document.querySelectorAll('.percent');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false){
            getFirstValue(atr);
        }
        if(isSecondValue === false){
            getSecondValue(atr);
        }        
    })
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el){
    if(firstValue != "" && sign != ""){
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {
    for(let i = 0; i < signs.length; i++){
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();

equals.addEventListener('click', () =>{
    result.innerHTML = "";
    if(sign ==="+") {
        resultValue = firstValue + secondValue;
    } else if(sign === "-") {
        resultValue = firstValue - secondValue;
    } else if(sign === "/"){
        resultValue = firstValue / secondValue;
    } else if(sign === "*"){
        resultValue = firstValue * secondValue;
    }
    result.innerHTML = resultValue;
})