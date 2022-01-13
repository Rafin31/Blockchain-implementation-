//Array to get non repetitive random miner's with hashrates 
var miners = ["50", "60", "20", "20", "55", "155", "520", "60", "10", "20", "155", "54", "570", "609", "170", "2", "5", "41", "510", "640", "105", "120", "525", "24"];

var temp = []; //Indexes (to shuffle)
var leader = []; //leader Array

//init indexes (or push miners.length if adding elements to miners)
for (i = 0; i < miners.length; i++) temp.push(i);

//get unique random element and add it to shuffled Array
for (i = 0; i < miners.length; i++) {
    var rr = Math.floor(Math.random() * (miners.length - i));
    var pickedcolor = miners[temp[rr]]; //unique random element
    temp.splice(rr, 1); //remove picked item indexclear
    if (leader.length != Math.ceil((miners.length * 10) / 100)) {
        leader.push(pickedcolor); //push to Shuffled Array
    }
}

console.log("Our Leader After Randomize Algorithm -> " + " " + leader + "\n");

// Function to find majority element
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
        var pickedcolor = array[temp[rr]]; //unique random element
        temp.splice(rr, 1); //remove picked item indexclear
        if (leader.length != Math.ceil((array.length * 10) / 100)) {
            leader.push(pickedcolor); //push to Shuffled Array
        }
    }

    return leader;
}


var arr = [50, 50, 50, 50, 55, 50, 55, 50, 54, 54, 54, 40, 54, 54, 54, 84, 59, 66, 47, 68, 83, 69]; // votes
var leader = findMajority(arr);
console.log(" Validator after Voting  : " + leader);


if (leader.length != 1) {

    final_validator = nonRepeatationAlgorithm(leader)
    console.log(" The Final Valodator After Voting : " + final_validator);
} else {
    console.log(" The Final Valodator After Voting  : " + leader);
}




