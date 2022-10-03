// (1) simple array methods......................
let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log([...arr]);

//splice
//console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2);
console.log(arr); //mutate original array

//reverse
const arr2 = ['j', 'i', 'h', 'g', 'f'];
arr2.reverse();
console.log(arr2);

//concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //spread operator

//join
console.log(letters.join(' - '));

// (2) "at" method ..............................
const arr3 = [23, 12, 45];
console.log(arr3[0]); //23
console.log(arr3.at(1)); //index no 1 => 12

//getting last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

// (3) looping arrays - forEach ..................
const new_data = [100, 200, 300, 400, 500, -699];

// for of loop
console.log('------for of loop-------');
// entries() method returns an array of arrays
for (const [i, data] of new_data.entries()) {
  data > 200
    ? console.log(`task ${i + 1}: you deposited ${data}`)
    : console.log(`task ${i + 1}: you withdraw ${Math.abs(data)}`); //abs means absolute value, Math is a built-in object
}

// forEach method
console.log('\n');
console.log('--------forEach---------');
new_data.forEach(function (data, i, arr) {
  data > 200
    ? console.log(`task ${i + 1}: you deposited ${data}`)
    : console.log(`task ${i + 1}: you withdraw ${Math.abs(data)}`); //abs means absolute value, Math is a built-in object
});

//forEach - Maps
const currencies = new Map([
  ['USD', 'UNITED STATES'],
  ['EUR', 'EUROPE'],
  ['GBP', 'UNITED KINGDOM'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

// reduce => reduce method returns a single value
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = number.reduce((acc, curr) => {
  console.log(`acc: ${acc}`);
  console.log(`curr: ${curr}`);
  return acc + curr;
});

console.log(total);
document.write(`<h1>Reduce, Total: ${total}</h1>`);

// filter => filter method returns a new array
const new_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterNumbers = new_numbers.filter((data) => data > 5);
console.log(filterNumbers);
document.write(`<h1>Filter Number: ${filterNumbers}</h1>`);

// map => map method returns a new array
const new_numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mapNumbers = new_numbers2.map((data) => data * 2);
console.log(mapNumbers);
document.write(`<h1>Map Number: ${mapNumbers}</h1>`);
