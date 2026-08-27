const _linhas = require('fs').readFileSync(0, 'utf8').split('\n');
let _i = 0;
const lerLinha = () => _linhas[_i++];
const lerNumeros = () => lerLinha().trim().split(/\s+/).map(Number);
const lerNumero = () => Number(lerLinha().trim());

const R = lerNumero();
const PI = 3.14159;
const volume = (4 / 3) * PI * Math.pow(R, 3);
console.log(`VOLUME = ${volume.toFixed(3)}`);