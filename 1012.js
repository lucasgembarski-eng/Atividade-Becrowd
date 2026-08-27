const _linhas = require('fs').readFileSync(0, 'utf8').split('\n');
let _i = 0;
const lerLinha = () => _linhas[_i++];
const lerNumeros = () => lerLinha().trim().split(/\s+/).map(Number);
const lerNumero = () => Number(lerLinha().trim());

const [A, B, C] = lerNumeros();
const PI = 3.14159;
console.log(`TRIANGULO: ${(A * C / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(PI * Math.pow(C, 2)).toFixed(3)}`);
console.log(`TRAPEZIO: ${((A + B) * C / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(B * B).toFixed(3)}`);
console.log(`RETANGULO: ${(A * B).toFixed(3)}`);
