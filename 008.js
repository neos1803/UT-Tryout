let array = [];
let input;

function sum(values) {
	values.pop();
  let inputNumbers = values.reduce((prev, curr) => curr += prev);
  return inputNumbers;
}

do {
	input = prompt('Give input numbers onlu');
  array.push(parseInt(input));
}while(input != '=');
console.log(sum(array));