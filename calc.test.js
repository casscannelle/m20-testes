const { insert, clean, back, calcular, calculate } = require('./script.js');

test('inserir número', () => {
    document.body.innerHTML = '<p id="resultado"></p>';
    insert('5');
    expect(document.getElementById('resultado').innerHTML).toBe('5');
});

test('limpar resultado', () => {
    document.body.innerHTML = '<p id="resultado">123</p>';
    clean();
    expect(document.getElementById('resultado').innerHTML).toBe('');
});

test('retroceder', () => {
    document.body.innerHTML = '<p id="resultado">123</p>';
    back();
    expect(document.getElementById('resultado').innerHTML).toBe('12');
});

test('calcular soma', () => {
    document.body.innerHTML = '<p id="resultado"></p>';
    insert('5');
    insert('+');
    insert('3');
    calcular();
    expect(document.getElementById('resultado').innerHTML).toBe('8');
});

test('calcular subtracao', () => {	
    document.body.innerHTML = '<p id="resultado"></p>';
    insert('6');
    insert('-');
    insert('3');
    calcular();
    expect(document.getElementById('resultado').innerHTML).toBe('3');
});

test('calcular divisao', () => {
    document.body.innerHTML = '<p id="resultado"></p>';
    insert('10');
    insert('/');
    insert('2');
    calcular();
    expect(document.getElementById('resultado').innerHTML).toBe('5');
});

test('calcular multiplicacao', () => {
    document.body.innerHTML = '<p id="resultado"></p>';
    insert('5');
    insert('*');
    insert('2');
    calcular();
    expect(document.getElementById('resultado').innerHTML).toBe('10');
});

test('calcular multiplicacao', () => {
    document.body.innerHTML = '<p id="resultado"></p>';
    insert('5');
    insert('*');
    insert('2');
    calcular();
    expect(document.getElementById('resultado').innerHTML).toBe('11');
});

test('calcular expressão inválida', () => {
    const expression = '5+*3';
    expect(calculate(expression)).toBeNaN();
});

test('calcular divisão por zero', () => {
    const expression = '5/0';
    expect(calculate(expression)).toBe(Infinity);
});