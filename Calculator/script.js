<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
var displayDiv = document.querySelector("#display");
displayDiv.innerText = "Some new value";
let num1 = '';
let num2 = '';
let operator = '';
let total = '';
$(document).ready(function() {
    $('button').on('click', function(e) {
        let btn = e.target.innerHTML;
        if (btn >= '0' && btn <= '9') {
            handleNumber(btn);
        } else {
            handleOperator(btn);
        }
    });
});
function handleNumber(num) {
    if (num1 === '') {
        num1 = num;
    } else {
        num2 = num;
    }
}
function handleOperator(oper) {
    operator = oper;
}
function calculate() {
    switch (operator) {
        case '+':
            total = +num1 + +num2;
            calculate(total);
            break;
        case '-':
            total = +num1 - +num2;
            displayButton(total);
            break;
        case '/':
            total = +num1 / +num2;
            displayButton(total);
            break;
        case 'X':
            total = +num1 * +num2;
            displayButton(total);
            break;
    }
    updateVariables();
}
function displayButton(btn) {
    $('.calc-result-input').text(btn);
}
function calculate(btn) {
    $('#equals').text(btn);
}
function updateVariables() {
    num1 = total;
    num2 = '';
}
