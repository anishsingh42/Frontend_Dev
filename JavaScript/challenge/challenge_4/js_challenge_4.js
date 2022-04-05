//using oops
class Calculator {
    constructor(previousInput, currentInput){
        this.previousTextElement = previousInput;
        this.currentTextElement = currentInput;
        //at the start we want no previous data and all things needs to be clear
        this.clear();
    }

    clear(){
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }
    equal(n1,n2,code){
        switch(code){
            case code: console.log(n1+n2);break;
        }
    }
    appendNumbers(number){
        //we want to make sure user enters only one dot(period)
        if(number === '.' && this.currentOperand.includes('.')) return;
        if(this.currentOperand.length > 12) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
        // console.log(typeof this.currentOperand);
    }

    operators(op){
    //    console.log(op);
    //    console.log('&#',op.charCodeAt(),';');
    //    console.log(typeof op.charCodeAt());
       this.operation = op;
       this.previousOperand = this.currentOperand;
       this.currentOperand='';
       switch(this.operation.charCodeAt()){
           case 43: 
       }
    }
    
    delete(){

    }
    updateDisplay(){
        this.currentTextElement.innerText = this.currentOperand;
    }
}


let operatorBtn = document.querySelectorAll('[data-operator]');
// console.log(operatorBtn);
let numbersBtn = document.querySelectorAll('[data-key]');
// console.log(numbers)
let deleteBtn = document.querySelector('[data-delete]');
let allClearBtn = document.querySelector('[data-AC]');
let equalsBtn = document.querySelector('[data-equal]');
let previousOperandTextElement = document.querySelector('#previous-output');
let currentOperandTextElement = document.querySelector('#current-output');


//object
const calc = new Calculator(previousOperandTextElement, currentOperandTextElement);


numbersBtn.forEach(function(button){
    button.addEventListener('click', function(){
        //take the number from the user
        calc.appendNumbers(button.innerText);
        calc.updateDisplay();
    });

});

operatorBtn.forEach(function(opButton){
    opButton.addEventListener('click', function(){
        //take the number from the user
        calc.operators(opButton.innerText);
        calc.updateDisplay();
    });

});

allClearBtn.addEventListener('click' , calc.clear());