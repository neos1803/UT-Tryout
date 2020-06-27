const obj = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];

function uniqueArray(target) {
    return target.filter((val, index) => target.indexOf(val) === index);
}

console.log(uniqueArray(obj));