"use strict";  //"use strict"; Defines that JavaScript code should be executed in "strict mode. With strict mode, you can not, for example, use undeclared variables."

let input = document.getElementById("input");
let number = document.querySelectorAll(".numbers div");
let operator = document.querySelectorAll(".operators div");
let result = document.getElementById("result");
let clear = document.getElementById("clear");
let resultDisplay = false;

// Adding click handlers to the number buttons
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {

        // storing current input string and its last character in variables - used later
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];
        // console.log(lastChar);

        //  If result is not display just adding this
        if (resultDisplay === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplay === true && lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷') {
            // if result is currently displayed and user pressed an operator
            // we need to keep on adding to the string for next operation
            resultDisplay = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            // if result is currently displayed and user pressed a number
            // we need clear the input string and add the new input to start the new opration
            resultDisplay = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }
    })
}

// Adding click handlers for operator button
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function (e) {

        // storing current input string and its last character in variables - used later
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];
        console.log(lastChar);

        // if last character entered is an operator, replace it with the currently pressed one
        if (lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷') {
            let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString
            // console.log(newString);
        } else if (currentString.length == 0) {
            // if first key pressed is an opearator, don't do anything
            // console.log("enter a number first");
        } else {
            //else just add the operator pressed to the input
            input.innerHTML += e.target.innerHTML;
        }
    })
}

// on click of equal(=) button
result.addEventListener("click", function () {
    let inputString = input.innerHTML;
    console.log(inputString);

    let numbers = inputString.split(/\+|\-|\×|\÷/g);
    console.log(numbers);

    let operators = inputString.replace(/[0-9]|\./g, "").split("");
    console.log(operators);

    // Divide
    var divide = operators.indexOf("÷");
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        console.log(numbers);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
        console.log(divide);
    }

    // multiply
    var multiply = operators.indexOf("×");
    while (multiply != -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      console.log(numbers);
      operators.splice(multiply, 1);
      multiply = operators.indexOf("×");
      console.log(multiply);
    }

    // substract
    var substract = operators.indexOf("-");
    console.log(substract);
    while (substract != -1) {
        numbers.splice(substract, 2, numbers[substract] - numbers[substract + 1]);
        console.log(numbers);
        operators.splice(substract, 1);
        substract = operators.indexOf("-");
        console.log(substract);
    }

    //Addition
    var add = operators.indexOf("+")
    while(add != -1){
        // using parseFloat is necessary, otherwise it will result in string concatenation 
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]))
        console.log(numbers);
        operators.splice(add, 1);
        add = operators.indexOf("+");
        console.log(add);
    }

    input.innerHTML = numbers[0];
    resultDisplay = true;
})

clear.addEventListener("click", function(){
    input.innerHTML = "";
})
