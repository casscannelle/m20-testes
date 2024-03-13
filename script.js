//funcoes da calculadora
function insert(num)
    {
        let numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    }
function clean()
    {
        document.getElementById('resultado').innerHTML = "";
    }
function back()
    {
        let resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }
function calcular()
    {
        let resultado = document.getElementById('resultado').innerHTML;
            if(resultado){
                document.getElementById('resultado').innerHTML = eval(resultado);
            }
            else{
                document.getElementById('resultado').innerHTML = "Nada..."
            }
    }
//usar o teclado
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