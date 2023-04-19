const Block = require('./block');

class BlockChain{
    constructor (origin, difficulty='000'){
        this.chain = [this.createFirstBlock(origin)];
        this.difficulty = difficulty;
    }
    createFirstBlock(origin){
        return new Block(0, origin);
    }
    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(data){
        let previousBlock = this.getLastBlock();
        let newBlock = new Block(previousBlock.index+1, data);

        newBlock.mine(this.difficulty);
        this.chain.push(newBlock);
    }

}

module.exports = BlockChain;