const SHA256 = require('crypto-js/sha256');

class Block{
    // Index = posición del bloque en la cadena.
    // Data = contenido de la cadena.
    // PreviousHash = valor del bloque anterior de la cadena.
    // Date = fecha de creación del bloque.
    // Hash = validacion como cadena original
    // nounce = numero aleatorio de la cadena

    constructor(index, data, previousHash=''){
        this.index = index;
        this.data = data;
        this.previousHash = previousHash;
        this.date = new Date();
        this.hash = this.createdHash();
        this.nounce = 0;
    }

    createdHash(){
        const originalChain = `${this.index} ${this.data} ${this.date} ${this.nounce}`;
        return SHA256(originalChain).toString();
    }
    mine(dif){
        while(!this.hash.startsWith(dif)){
            this.nounce++;
            this.hash = this.createdHash();
        }

    }
}

module.exports = Block;

// Cifrados Símetricos y Asímetricos

// SHA --> Algoritmo irrevesible