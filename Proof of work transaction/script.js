const SHA256 = require('crypto-js/sha256');

class Transaction {
    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;

    }




}



class Block {
    constructor(timestamp, transaction, previousHash = '') {
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.transaction = transaction;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("BLOCK MINED: " + this.hash);
    }
}


class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendigTransaction = [];
        this.miningReward = 100;
    }

    createGenesisBlock() {
        return new Block(0, "17/12/2021", "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    minePendingTrasaction(miningReqardAddress) {
        let block = new Block(Date.now(), this.pendigTransaction)
        block.mineBlock(this.difficulty);

        console.log("Block mined succefully");
        this.chain.push(block);


        this.pendigTransaction = [
            new Transaction(null, miningReqardAddress, this.miningReward)
        ];
    }

    createTransaction(transaction) {
        this.pendigTransaction.push(transaction);
    }


    getBalanceOfAddress(address) {
        let balance = 0;


        for (const block of this.chain) {
            for (const trans of block.transaction) {
                if (trans.fromAddress === address) {
                    balance -= trans.amount;
                }

                if (trans.toAddress === address) {
                    balance += trans.amount;
                }
            }
        }

        return balance;
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


// creating block
// let rafincoin = new Blockchain();
// console.log('Mining block 1...');
// rafincoin.addBlock(new Block(1, "20/07/2017", { amount: 4 }));

// console.log('Mining block 2...');
// rafincoin.addBlock(new Block(2, "20/07/2017", { amount: 8 }));


//Transaction

// let rafincoin = new Blockchain();

// rafincoin.createTransaction(new Transaction('address1', "address2", 100));

// console.log("\n Starting A miner: ");
// rafincoin.minePendingTrasaction("xaviers-address");


// console.log("\n Balance of xaviers", rafincoin.getBalanceOfAddress("xaviers-address"));


// console.log("\n Starting A miner 2..: ");
// rafincoin.minePendingTrasaction("xaviers-address");
// console.log("\n Balance of xaviers", rafincoin.getBalanceOfAddress("xaviers-address"));