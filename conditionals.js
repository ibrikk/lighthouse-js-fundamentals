/* const raining = true;
const cold = false;

if (raining) {
    console.log("Don't forget your umbrella!");
}

if (cold) {
    console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

var start = 1;

while (start < 100) {
    console.log(start);
} */

var x = 60;

while (x >= 0) {
    if (x === 50) {
        console.log('Orbiter transfers from ground to internal power')
    } else if (x === 31) {
        console.log('Ground launch sequencer is go for auto sequence start')
    } else if (x === 16) {
        console.log('Activate launch pad sound suppression system')
    } else if (x === 10) {
        cosole.log('Activate main engine hydrogen burnoff system')
    } else if (x === 6) {
        console.log('Main engine start');
    } else if (x === 0) {
        console.log('Solid rocket booster ignition and liftoff!')
    } else {
        console.log('T-' + x + ' seconds');
    }
    x = x - 1;
}

