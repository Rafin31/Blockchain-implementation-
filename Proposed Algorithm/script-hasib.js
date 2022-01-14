const { createHash } = require('crypto');
const prompt = require("prompt-sync")({ sigint: true });

let Transacion_data = prompt("PLease Make a Transacion");

let dataset = [
    { x: 188, y: 484, z: 273 },
    { x: 85, y: 346, z: 205 },
    { x: 321, y: 185, z: 145 },
    { x: 204, y: 300, z: 367 },
    { x: 262, y: 3, z: 295 },
    { x: 417, y: 49, z: 324 },
    { x: 468, y: 258, z: 407 },
    { x: 307, y: 267, z: 372 },
    { x: 39, y: 60, z: 419 },
    { x: 460, y: 281, z: 416 },
    { x: 468, y: 383, z: 182 },
    { x: 442, y: 18, z: 87 },
    { x: 140, y: 489, z: 391 },
    { x: 162, y: 58, z: 350 },
    { x: 313, y: 35, z: 32 },
    { x: 353, y: 211, z: 387 },
    { x: 4, y: 424, z: 225 },
    { x: 266, y: 428, z: 362 },
    { x: 202, y: 463, z: 16 },
    { x: 235, y: 330, z: 414 },
    { x: 82, y: 347, z: 92 },
    { x: 157, y: 372, z: 376 },
    { x: 28, y: 20, z: 201 },
    { x: 126, y: 131, z: 253 },
    { x: 363, y: 24, z: 145 },
    { x: 155, y: 266, z: 387 },
    { x: 473, y: 371, z: 116 },
    { x: 273, y: 33, z: 437 },
    { x: 376, y: 406, z: 438 },
    { x: 241, y: 155, z: 473 },
    { x: 257, y: 363, z: 237 },
    { x: 500, y: 458, z: 221 },
    { x: 393, y: 288, z: 286 },
    { x: 135, y: 81, z: 488 },
    { x: 25, y: 108, z: 206 },
    { x: 151, y: 169, z: 21 },
    { x: 21, y: 70, z: 130 },
    { x: 237, y: 492, z: 481 },
    { x: 377, y: 207, z: 123 },
    { x: 315, y: 43, z: 327 },
    { x: 321, y: 63, z: 358 },
    { x: 483, y: 384, z: 29 },
    { x: 73, y: 160, z: 20 },
    { x: 354, y: 391, z: 485 },
    { x: 135, y: 273, z: 155 },
    { x: 242, y: 89, z: 224 },
    { x: 133, y: 285, z: 154 },
    { x: 169, y: 49, z: 385 },
    { x: 95, y: 219, z: 234 },
    { x: 162, y: 181, z: 274 },
    { x: 9, y: 122, z: 454 },
    { x: 232, y: 366, z: 496 },
    { x: 115, y: 377, z: 125 },
    { x: 201, y: 7, z: 495 },
    { x: 290, y: 368, z: 308 },
    { x: 381, y: 94, z: 198 },
    { x: 226, y: 37, z: 24 }


];

function DistanceCalc(x1, y1, z1, x2, y2, z2) {
    return parseFloat((Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2) + Math.pow((z1 - z2), 2))).toFixed(2));

}

function compare(d1, d2, d3) {
    if (d1 < d2 && d1 < d3) {
        return d1;
    } else if (d2 < d1 && d2 < d3) {
        return d2;
    } else {
        return d3;
    }
}

var cluster1 = [];
var cluster2 = [];
var cluster3 = [];


function iteration(avgX1, avgY1, avgZ1, avgX2, avgY2, avgZ2, avgX3, avgY3, avgZ3) {

    for (let i = 0; i < dataset.length; i++) {
        let d1 = DistanceCalc(avgX1, avgY1, avgZ1, dataset[i].x, dataset[i].y, dataset[i].z);
        let d2 = DistanceCalc(avgX2, avgY2, avgZ2, dataset[i].x, dataset[i].y, dataset[i].z);
        let d3 = DistanceCalc(avgX3, avgY3, avgZ3, dataset[i].x, dataset[i].y, dataset[i].z);

        var results = compare(d1, d2, d3);

        if (results == d1) {
            cluster1.push(i);
        } else if (results == d2) {
            cluster2.push(i);
        } else if (results == d3) {
            cluster3.push(i);
        }

    }
}

function inital(centroid1, centroid2, centroid3) {
    var avgX1 = dataset[centroid1].x;
    var avgY1 = dataset[centroid1].y;
    var avgZ1 = dataset[centroid1].z;


    var avgX2 = dataset[centroid2].x;
    var avgY2 = dataset[centroid2].y;
    var avgZ2 = dataset[centroid2].z;

    var avgX3 = dataset[centroid3].x;
    var avgY3 = dataset[centroid3].y;
    var avgZ3 = dataset[centroid3].z;

    iteration(avgX1, avgY1, avgZ1, avgX2, avgY2, avgZ2, avgX3, avgY3, avgZ3);
}


var x1, y1, z1, x2, y2, z2, x3, y3, z3;


function AverageCentroid() {
    var avgX1 = 0;
    var avgY1 = 0;
    var avgZ1 = 0;

    var avgX2 = 0;
    var avgY2 = 0;
    var avgZ2 = 0;

    var avgX3 = 0;
    var avgY3 = 0;
    var avgZ3 = 0;


    for (var i = 0; i < cluster1.length; i++) {

        var avgX1 = avgX1 + dataset[cluster1[i]].x;
        var avgY1 = avgY1 + dataset[cluster1[i]].y;
        var avgZ1 = avgZ1 + dataset[cluster1[i]].z;
    }

    var avgX1 = parseFloat((avgX1 / cluster1.length).toFixed(1));
    var avgY1 = parseFloat((avgY1 / cluster1.length).toFixed(1));
    var avgZ1 = parseFloat((avgZ1 / cluster1.length).toFixed(1));

    for (var i = 0; i < cluster2.length; i++) {

        var avgX2 = avgX2 + dataset[cluster2[i]].x;
        var avgY2 = avgY2 + dataset[cluster2[i]].y;
        var avgZ2 = avgZ2 + dataset[cluster2[i]].z;
    }

    var avgX2 = parseFloat((avgX2 / cluster2.length).toFixed(1));
    var avgY2 = parseFloat((avgY2 / cluster2.length).toFixed(1));
    var avgZ2 = parseFloat((avgZ2 / cluster2.length).toFixed(1));

    for (var i = 0; i < cluster3.length; i++) {

        var avgX3 = avgX3 + dataset[cluster3[i]].x;
        var avgY3 = avgY3 + dataset[cluster3[i]].y;
        var avgZ3 = avgZ3 + dataset[cluster3[i]].z;
    }

    var avgX3 = parseFloat((avgX3 / cluster3.length).toFixed(1));
    var avgY3 = parseFloat((avgY3 / cluster3.length).toFixed(1));
    var avgZ3 = parseFloat((avgZ3 / cluster3.length).toFixed(1));


    /*console.log("X:" + avgX1 + "Y:" + avgY1 + "Z:" + avgZ1)
    console.log("X:" + avgX2 + "Y:" + avgY2 + "Z:" + avgZ2)
    console.log("X:" + avgX3 + "Y:" + avgY3 + "Z:" + avgZ3)

    //console.log("--------------")*/

    x1 = avgX1;
    x2 = avgX2;
    x3 = avgX3;

    y1 = avgY1;
    y2 = avgY2;
    y3 = avgY3;


    z1 = avgZ1;
    z2 = avgZ2;
    z3 = avgZ3;

    cluster1 = [];
    cluster2 = [];
    cluster3 = [];



}


function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}



inital(7, 2, 10);
AverageCentroid();

var i = 200;
var j = 0;
temp = []

while (i != 201) {


    iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);


    var temp2 = [];
    temp2.push(x1, y1, z1, x2, y2, z2, x3, y3, z3);

    if (arrayEquals(temp, temp2)) {
        console.log(temp2)
        console.log(j)
        i++
    } else {
        j++
        temp = [];
        temp2 = [];
        temp.push(x1, y1, z1, x2, y2, z2, x3, y3, z3);
        AverageCentroid();
    }
}
console.log('--------------------CLUSTER-1-------------------------------')
console.log(cluster1)
console.log('-------------------------CLUSTER-2--------------------------')
console.log(cluster2)
console.log('-+-----------------------CLUSTER-3-------------------------')
console.log(cluster3)
console.log('-+-----------------------CLUSTER-END-------------------------')





var miners = [];

//var miners = cluster3;
for (let i = 0; i < cluster2.length; i++) {
    miners[i] = cluster2[i].toString();
}



var temp = []; //Indexes (to shuffle)
var leader = []; //leader Array

//init indexes (or push miners.length if adding elements to miners)
for (i = 0; i < miners.length; i++) temp.push(i);

//get unique random element and add it to shuffled Array
for (i = 0; i < miners.length; i++) {
    var rr = Math.floor(Math.random() * (miners.length - i));
    var lead = miners[temp[rr]]; //unique random element
    temp.splice(rr, 1); //remove picked item indexclear
    if (leader.length != Math.ceil((miners.length * 10) / 100)) {
        leader.push(lead); //push to Shuffled Array
    }
}

console.log("Our Leader After Randomize Algorithm -> " + " " + leader + "\n");



/*-------------------------------------------
       Function to find majority element
-----------------------------------------*/


function findMajority(array) {
    if (array.length == 0) return null;
    var modeMap = {},
        maxCount = 1,
        modes = [];

    for (var i = 0; i < array.length; i++) {
        var el = array[i];

        if (modeMap[el] == null) modeMap[el] = 1;
        else modeMap[el]++;

        if (modeMap[el] > maxCount) {
            modes = [el];
            maxCount = modeMap[el];
        } else if (modeMap[el] == maxCount) {
            modes.push(el);
            maxCount = modeMap[el];
        }
    }
    return modes;
}


function nonRepeatationAlgorithm(array) {

    var temp = []; //Indexes (to shuffle)
    var leader = []; //leader Array


    for (i = 0; i < array.length; i++) temp.push(i);

    for (i = 0; i < array.length; i++) {
        var rr = Math.floor(Math.random() * (array.length - i));
        var lead = array[temp[rr]]; //unique random element
        temp.splice(rr, 1); //remove picked item indexclear
        if (leader.length != Math.ceil((array.length * 10) / 100)) {
            leader.push(lead); //push to Shuffled Array
        }
    }

    return leader;
}

var arr = []; // votes

for (let i = 0; i < 5; i++) {
    arr.push(prompt("Please Vote" + " " + "among " + leader + " " + "->" + " "))
}

console.log("--------------------------------")
console.log("--------------------------------")
console.log("--------------------------------")

var leader = findMajority(arr);
console.log(" Validator after Voting  : " + leader);

console.log("--------------------------------")
console.log("--------------------------------")
console.log("--------------------------------")


if (leader.length != 1) {

    final_validator = nonRepeatationAlgorithm(leader)
    console.log(" The Final Valodator After Voting : " + final_validator);
} else {
    final_validator = leader;
    console.log(" The Final Valodator After Voting  : " + final_validator);
}

console.log("--------------------------------")
console.log("--------------------------------")
console.log("--------------------------------")

/*-------------------------------------------
        PROOF OF HISTORY
-----------------------------------------*/

class POH {
    count = 0;
    constructor(Data, timestamp, block_number) {
        this.Data = Data;
        this.timestamp = timestamp;
        this.block_number = block_number;
        this.hash = this.hash(this.ConcateLegder())

    }
    hash(string) {
        string = createHash('sha256').update(string).digest('hex');
        if (this.count == 100) {
            return string;
        }
        else {
            this.count++;
            return this.hash(string);
        }
    }

    ConcateLegder() {

        var hash = this.Data.toString() + this.timestamp.toString() + this.block_number.toString();
        return hash;
    }
}





/*-------------------------------------------
        Minning Block
-----------------------------------------*/


const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(hash, block_number, Data, previousHash = '') {
        this.block_number = block_number
        this.previousHash = previousHash;
        this.hash = hash;
        this.Amount = Data
    }


    mineBlock() {
        console.log("BLOCK MINED: " + this.hash);
    }
}


class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new POH(0, "17/12/2021", "0");
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



let rafincoin = new Blockchain();
console.log("Node " + final_validator + 'is mining new block...');
console.log("--------------------------------")
console.log("--------------------------------")
console.log("--------------------------------")


let p = new POH(Transacion_data, "1/15/2022", 1)

console.log("New Mined Block -> " + p.hash);

console.log("--------------------------------")
console.log("--------------------------------")
console.log("--------------------------------")

rafincoin.addBlock(new Block(p.hash, 1, Transacion_data))


console.log("--------------------------------")
console.log("--------------------------------")
console.log("--------------------------------")


console.log("\n Blockchain -> ", JSON.stringify(rafincoin, null, 55))









