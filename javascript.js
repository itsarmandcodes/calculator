let current_text = '' ;
let current_number = '' ;
let solveArray = [] ;


document.querySelector('.view_text').textContent = "Ready!" ;

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.option');

function updateText(){
    document.querySelector('.view_text').textContent = current_text;
};

function addStep(e){
    current_text += this.id;
    current_number += this.id;
    updateText()
    };

function performOp(e){
    solveArray.push(parseFloat(current_number));
    solveArray.push(this.id);
    current_number = ''
    current_text += ` ${this.id} `;
    updateText()
    };

function solveThis(){
    solveArray.push(parseFloat(current_number));
    let total = solveArray[0];
    let i = 1;
    while(i < solveArray.length){
        let current_op = solveArray[i];

        if(current_op == "+"){
            total += solveArray[i+1]
        }else if(current_op == "-"){
            total -= solveArray[i+1]
        }else if(current_op == "*"){
            total *= solveArray[i+1]
        }else if(current_op == "/"){
            total /= solveArray[i+1]
        }
        i += 2;
    }

    current_text += ` ${this.id} ${total}`;
    updateText();
    console.log("total is " + total);
    };


numbers.forEach(number => number.addEventListener('click', addStep));
operators.forEach(operator => operator.addEventListener('click', performOp));
document.querySelector('.done').addEventListener('click', solveThis);

   
