// zadanie 1

const hello = 'Hello'
const world = 'World'

console.log(`${hello} ${world}`);

//zadanie 2

const multiply = (a, b = 1) => console.log(a*b);

//zadanie 3

const average = (...sum) => Math.floor(sum.reduce((previous, current) => previous + current / sum.length));

console.log(average(1,3)); //2

//zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//zadanie 5

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, ,lastName] = data;

console.log(`${firstName} ${lastName}`);
