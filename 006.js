function factorial(value) {
    if (value == 0) {
        return 1;
    }
    return value * factorial(value - 1);
}

console.log(factorial(4));
console.log(factorial(6));
console.log(factorial(20));