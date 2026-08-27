const _linhas = require('fs').readFileSync(0, 'utf8').split('\n');
let _i = 0;
const lerLinha = () => _linhas[_i++];
const lerNumeros = () => lerLinha().trim().split(/\s+/).map(Number);
const lerNumero = () => Number(lerLinha().trim());

const [cod1, qtd1, preco1] = lerNumeros();
const [cod2, qtd2, preco2] = lerNumeros();

const total = qtd1 * preco1 + qtd2 * preco2;
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);