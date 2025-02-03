const fnHorasExtras = require('./horasextras');

test ('salario por hora 10, horas trabalhadas 50, carga horario 40, resultado experado 100', () => { 
    expect(fnHorasExtras(10, 50, 40)).toBe(100);
})