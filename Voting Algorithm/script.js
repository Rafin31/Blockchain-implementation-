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


var arr = [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 9, 6, 7, 8, 3, 9];
var leader = findMajority(arr);
console.log(" Leader : " + leader);


if (leader.length != 1) {

  final_validator = nonRepeatationAlgorithm(leader)
  console.log(" The Final Leader element is : " + final_validator);
} else {
  console.log(" The majority element is : " + leader);
}

