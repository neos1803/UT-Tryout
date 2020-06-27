let randomNumbers = [];

function max(value) {
    value.sort((a, b) => b - a);
    return console.log("Max = ", value[0]);
}

function min(value) {
    value.sort((a, b) => a -b);
    return console.log('Min = ', value[0]);
}

function average(value) {
    let sum = value.reduce((prev, current) => current += prev);
    return console.log('Average = ', sum/value.length);
}

for (let i=0; i < 100; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}

average(randomNumbers);
min(randomNumbers);
max(randomNumbers);