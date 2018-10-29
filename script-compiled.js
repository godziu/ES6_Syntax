'use strict';

// zadanie 1

var hello = 'Hello';
var world = 'World';

console.log(hello + ' ' + world);

//zadanie 2

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log(a * b);
};

//zadanie 3

var average = function average() {
  for (var _len = arguments.length, sum = Array(_len), _key = 0; _key < _len; _key++) {
    sum[_key] = arguments[_key];
  }

  return Math.floor(sum.reduce(function (previous, current) {
    return previous + current / sum.length;
  }));
};

console.log(average(1, 3)); //2

//zadanie 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

//zadanie 5

var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastName = data[4];


console.log(firstName + ' ' + lastName);
