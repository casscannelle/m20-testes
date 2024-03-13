function insert(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = calculateExpression(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Nada...";
    }
}

//calculos
function calculateExpression(expression) {
    let numbers = expression.split(/\+|\-|\*|\//g);
    let operators = expression.replace(/[0-9]|\./g, "").split("");

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '*') {
            numbers[i] = parseFloat(numbers[i]) * parseFloat(numbers[i + 1]);
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        } else if (operators[i] === '/') {
            numbers[i] = parseFloat(numbers[i]) / parseFloat(numbers[i + 1]);
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        }
    }

    let result = parseFloat(numbers[0]);
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            result += parseFloat(numbers[i + 1]);
        } else if (operators[i] === '-') {
            result -= parseFloat(numbers[i + 1]);
        }
    }
    return result;
}

// Usar o teclado
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || ['/', '*', '+', '-', '.', 'Enter', 'Backspace'].includes(key)) {
        if (key === 'Enter') {
            calcular();
        } else if (key === 'Backspace') {
            back();
        } else {
            insert(key);
        }
    }
});