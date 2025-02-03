const fnHorasExtras = require('./horasextras');

test ('salario por hora 10, horas trabalhadas 50, carga horario 40, resultado experado 100', () => { 
    expect(fnHorasExtras(10, 50, 40)).toBe(100);
})

test ('salario por hora 10, horas trabalhadas 30, carga horario 36, resultado experado 0', () => { 
    expect(fnHorasExtras(10, 30, 36)).toBe(0);
})