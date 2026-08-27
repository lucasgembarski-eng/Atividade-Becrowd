const _linhas = require('fs').readFileSync(0, 'utf8').split('\n');
let _i = 0;
const lerLinha = () => _linhas[_i++];
const lerNumeros = () => lerLinha().trim().split(/\s+/).map(Number);
const lerNumero = () => Number(lerLinha().trim());

const [A, B, C] = lerNumeros();
const maior = Math.max(A, B, C);
console.log(`${maior} eh o maior`);

