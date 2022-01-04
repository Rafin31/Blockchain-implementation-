const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.inedex = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock() {

        this.hash = this.calculateHash();
        console.log("BLOCK MINED: " + this.hash);
    }
}


class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "17/12/2021", "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock();
        this.chain.push(newBlock);
    }



    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];


            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }


            return true;
        }
    }

}

let stakedCoins = {
    "address-1": 56,
    "address-2": 78,
    "address-3": 69,
    "address-4": 60,
    "address-5": 50,
    "address-6": 50,
    "address-7": 40,
    "address-8": 90,
    "address-9": 85,
    "address-10": 73,
    "address-11": 45,
    "address-12": 39,
    "address-13": 35,
    "address-14": 32,
    "address-15": 45,
    "address-16": 35
}


//creating block
////////////////////////////////////////////////////////////////////////////////////////////
let rafincoin = new Blockchain(); // create genesis block

console.log('Choosing Leader...');
console.log('-----------------------------------------------');
let leader = Object.keys(stakedCoins).reduce((a, b) => stakedCoins[a] > stakedCoins[b] ? a : b)
console.log('\n');
console.log("Leader is -> " + leader);
console.log('\n');
console.log('Leader is Mining block');


rafincoin.addBlock(new Block(1, "20/07/2017", { amount: 4 }));
console.log('\n');
//////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log('Choosing Leader...');
console.log('\n');

let leader_2 = Object.keys(stakedCoins).reduce((a, b) => stakedCoins[a] > stakedCoins[b] ? a : b)
console.log('\n');
console.log("Leader 2 is -> " + leader_2);
console.log('\n');
console.log('Leader 2 is Mining block');


rafincoin.addBlock(new Block(1, "20/07/2017", { amount: 4 }));
console.log('\n');

//////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('\n');




console.log('The Block Chain');


console.log("\n Blockchain -> ", JSON.stringify(rafincoin, null, 4))