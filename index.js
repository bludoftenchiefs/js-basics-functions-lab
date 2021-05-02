// Code your solution in this file!
const address = 42;
let price = 0;
function distanceFromHqInBlocks(block) {
    let dist = block - address;
    if (dist < 0 ) {
        dist = dist * -1;
    }
    return dist;
}

function distanceFromHqInFeet(block) {
    let distFeet = (block - address)*264;
    if (distFeet < 0 ) {
        distFeet = distFeet * -1;
    }
    return distFeet;
}

function distanceTravelledInFeet(starts, finish) {
    let travelDist = (starts - finish)*264;
    if (travelDist < 0) {
        travelDist = travelDist * -1;
    } 
    return travelDist;
}

function calculatesFarePrice(starts, finish) {
    let driveLength = distanceTravelledInFeet(starts, finish);
     if (driveLength <= 400) {
        return 0;
    } else if (driveLength > 400 && driveLength < 2000) {
        return 2.56;
    } else if (driveLength > 2000 && driveLength < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    } 
}
console.log(calculatesFarePrice(start, destination));