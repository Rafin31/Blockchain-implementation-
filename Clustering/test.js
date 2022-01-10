let dataset = [
    { x: 188, y: 484, z: 273 },
    { x: 85, y: 346, z: 205 },
    { x: 321, y: 185, z: 145 },
    { x: 204, y: 300, z: 367 },
    { x: 262, y: 3, z: 295 },
    { x: 417, y: 49, z: 324 },
    { x: 39, y: 56, z: 239 },
    { x: 325, y: 297, z: 147 },
    { x: 64, y: 53, z: 301 },
    { x: 469, y: 442, z: 242 },
    { x: 457, y: 306, z: 93 },
    { x: 35, y: 5, z: 134 },
    { x: 387, y: 129, z: 7 },
    { x: 162, y: 342, z: 336 },
    { x: 342, y: 456, z: 178 },
    { x: 489, y: 222, z: 477 },
    { x: 87, y: 74, z: 124 },
    { x: 458, y: 55, z: 445 },
    { x: 352, y: 335, z: 480 }


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


//datalength = dataset.length;

// centroid1 = Math.floor(Math.random() * datalength + 1);
// centroid2 = Math.floor(Math.random() * datalength + 1);
// centroid3 = Math.floor(Math.random() * datalength + 1);




//c1 = dataset[centroid1];
//c2 = dataset[centroid2];
//c3 = dataset[centroid3];


//dataset[centroid1].x
var cluster1 = [];
var cluster2 = [];
var cluster3 = [];


function iteration(centroid1, centroid2, centroid3) {

    for (let i = 0; i < dataset.length; i++) {
        let d1 = DistanceCalc(dataset[centroid1].x, dataset[centroid1].y, dataset[centroid1].z, dataset[i].x, dataset[i].y, dataset[i].z);
        let d2 = DistanceCalc(dataset[centroid2].x, dataset[centroid2].y, dataset[centroid2].z, dataset[i].x, dataset[i].y, dataset[i].z);
        let d3 = DistanceCalc(dataset[centroid3].x, dataset[centroid3].y, dataset[centroid3].z, dataset[i].x, dataset[i].y, dataset[i].z);

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

var final_cluster1 = [];
var final_cluster2 = [];
var final_cluster3 = [];


function secondIteration(centroid_1_avg_x, centroid_1_avg_y, centroid_1_avg_z, centroid_2_avg_x, centroid_2_avg_y, centroid_2_avg_z, centroid_3_avg_x, centroid_3_avg_y, centroid_3_avg_z) {

    for (let i = 0; i < dataset.length; i++) {
        let d1 = DistanceCalc(centroid_1_avg_x, centroid_1_avg_y, centroid_1_avg_z, dataset[i].x, dataset[i].y, dataset[i].z);
        let d2 = DistanceCalc(centroid_2_avg_x, centroid_2_avg_y, centroid_2_avg_z, dataset[i].x, dataset[i].y, dataset[i].z);
        let d3 = DistanceCalc(centroid_3_avg_x, centroid_3_avg_y, centroid_3_avg_z, dataset[i].x, dataset[i].y, dataset[i].z);

        var results = compare(d1, d2, d3);


        if (results == d1) {
            final_cluster1.push(i);
        } else if (results == d2) {
            final_cluster2.push(i);
        } else if (results == d3) {
            final_cluster3.push(i);
        }


    }
}



// console.log(cluster1);

// console.log('..........');


// console.log(cluster2);

// console.log('..........');

// console.log(cluster3);

// console.log('..........');


var arraysMatch = function(arr1, arr2) {

    // Check if the arrays are the same length
    if (arr1.length !== arr2.length) return false;

    // Check if all items exist and are in the same order
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    // Otherwise, return true
    return true;

};





var C1avgX = 0;
var C1avgY = 0;
var C1avgZ = 0;

var C2avgX = 0;
var C2avgY = 0;
var C2avgZ = 0;

var C3avgX = 0;
var C3avgY = 0;
var C3avgZ = 0;


var temp1
var temp2
var temp3

iteration(6, 8, 2);

console.log('1st OUTPUT');
console.log(cluster1);
console.log(cluster2);
console.log(cluster3);

console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');

temp1 = cluster1;
temp2 = cluster2;
temp3 = cluster3;

for (var i = 0;; i++) {

    for (var j = 0; j < cluster1.length; j++) {

        var C1avgX = C1avgX + dataset[cluster1[j]].x;
        var C1avgY = C1avgY + dataset[cluster1[j]].y;
        var C1avgZ = C1avgZ + dataset[cluster1[j]].z;
    }

    var C1avgX = parseFloat((C1avgX / cluster1.length).toFixed(1));
    var C1avgY = parseFloat((C1avgY / cluster1.length).toFixed(1));
    var C1avgZ = parseFloat((C1avgZ / cluster1.length).toFixed(1));



    for (var j = 0; j < cluster2.length; j++) {

        var C2avgX = C2avgX + dataset[cluster2[j]].x;
        var C2avgY = C2avgY + dataset[cluster2[j]].y;
        var C2avgZ = C2avgZ + dataset[cluster2[j]].z;
    }

    var C2avgX = parseFloat((C2avgX / cluster2.length).toFixed(1));
    var C2avgY = parseFloat((C2avgY / cluster2.length).toFixed(1));
    var C2avgZ = parseFloat((C2avgZ / cluster2.length).toFixed(1));



    for (var j = 0; j < cluster3.length; j++) {

        var C3avgX = C3avgX + dataset[cluster3[j]].x;
        var C3avgY = C3avgY + dataset[cluster3[j]].y;
        var C3avgZ = C3avgZ + dataset[cluster3[j]].z;
    }

    var C3avgX = parseFloat((C3avgX / cluster3.length).toFixed(1));
    var C3avgY = parseFloat((C3avgY / cluster3.length).toFixed(1));
    var C3avgZ = parseFloat((C3avgZ / cluster3.length).toFixed(1));



    secondIteration(C1avgX, C1avgY, C1avgZ, C2avgX, C2avgY, C2avgZ, C3avgX, C3avgY, C3avgZ);


    if (arraysMatch(temp1, final_cluster1)) {

        if (arraysMatch(temp2, final_cluster2)) {

            if (arraysMatch(temp3, final_cluster3)) {


                console.log("previous")
                console.log(temp1)
                console.log(temp2)
                console.log(temp3)

                temp1 = final_cluster1;
                temp2 = final_cluster2;
                temp3 = final_cluster3;

                console.log("itaraton -> " + " " + i)
                break;
            } else {
                temp1 = final_cluster1;
                temp2 = final_cluster2;
                temp3 = final_cluster3;
                continue;
            }
        } else {
            temp1 = final_cluster1;
            temp2 = final_cluster2;
            temp3 = final_cluster3;
            continue;
        }
    } else {
        console.log("2-------------------------------------------")
        temp1 = final_cluster1;
        temp2 = final_cluster2;
        temp3 = final_cluster3;

        final_cluster1.splice(0, final_cluster1.length);
        final_cluster2.splice(0, final_cluster2.length);
        final_cluster3.splice(0, final_cluster3.length);


        continue;
    }

}


console.log('FINAL OUTPUT');
console.log(temp1);
console.log(temp2);
console.log(temp3);