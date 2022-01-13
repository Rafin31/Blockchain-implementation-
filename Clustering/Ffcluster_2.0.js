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
    { x: 489, y: 222, z: 477 }



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


    // console.log("X:" + avgX1 + "Y:" + avgY1 + "Z:" + avgZ1)
    // console.log("X:" + avgX2 + "Y:" + avgY2 + "Z:" + avgZ2)
    // console.log("X:" + avgX3 + "Y:" + avgY3 + "Z:" + avgZ3)

    console.log("--------------")

    x1 = avgX1;
    x2 = avgX2;
    x3 = avgX3;

    y1 = avgY1;
    y2 = avgY2;
    y3 = avgY3;


    z1 = avgZ1;
    z2 = avgZ2;
    z3 = avgZ3;



}



inital(7, 2, 10);
AverageCentroid();


iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);

AverageCentroid();

var cluster1 = [];

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);

console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
// console.log(cluster1);
AverageCentroid();



iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
// console.log(cluster1);
AverageCentroid();



iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
// console.log(cluster1);
AverageCentroid();



iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
// console.log(cluster1);
AverageCentroid();


iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
// console.log(cluster1);
AverageCentroid();


iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
// console.log(cluster1);
AverageCentroid();


iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
// console.log(cluster1);
AverageCentroid();


iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
// console.log(cluster1);
AverageCentroid();








































/*console.log(d1);
   console.log(d2);
   console.log(d3);*/

/*

var array = dataset[0];
//console.log(dataset[0].y);
//console.log(array['y']);
//datalength = dataset.length;


console.log(datalength+" length of dataset");

console.log((Math.floor(Math.random() * datalength+1))+ " random centroid 1");
console.log((Math.floor(Math.random() * datalength+1))+ " random centroid 2");
console.log((Math.floor(Math.random() * datalength+1))+ " random centroid 3");

*/