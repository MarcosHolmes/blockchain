const Block = require('./block');
const BlockChain = require('./blockchain');

const blockchain = new BlockChain("hola nueva cadena de blockchain");
blockchain.addBlock("Data del segundo bloque");
blockchain.addBlock("Data del tercer bloque");


/*let block = new Block(0, "x", null);
console.log(block);*/

console.log(blockchain);
