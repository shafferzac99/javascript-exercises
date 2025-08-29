const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
  for (let num of arr){
    sum += num;
  }

  return sum
	
};

const multiply = function(arr) {
  let product = 1;
  for (let num of arr){
    product *= num;
  }

  return product
};

const power = function(num, exponent) {
  return Math.pow(num, exponent);
};

const factorial = function(num) {
  let factorial = 1
  for(i=num; i > 0; i--)
  {
    factorial *=i;
  }
	
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
