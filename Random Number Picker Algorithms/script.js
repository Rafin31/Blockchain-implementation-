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

console.log("Our Leader -> " + " " + leader);