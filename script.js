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
        document.getElementById('resultado').innerHTML = calculate(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Nada...";
    }
}

function calculate(expression) {
    // Divide a expressão em números e operadores
    let numbers = expression.split(/[\+\-\*\/]/g);
    let operators = expression.replace(/[0-9]|\./g, "").split("");

    // Realiza os cálculos
    let result = parseFloat(numbers[0]);
    for (let i = 0; i < operators.length; i++) {
        let num = parseFloat(numbers[i + 1]);
        if (operators[i] === '+') {
            result += num;
        } else if (operators[i] === '-') {
            result -= num;
        } else if (operators[i] === '*') {
            result *= num;
        } else if (operators[i] === '/') {
            result /= num;
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