// type conversion
const year = '2020'; // string
console.log(Number(year)); // change into Number
console.log(Number(year) + 2); //2022

console.log(String(year) + 2); // change into String

//type coercion
console.log('I am ' + ' 20 ' + 'years old'); // I am 20 years old
console.log('20' + '10' + 3); // 20103

let n = '1' + 1; // '11'
n = n - 1; // '10'
console.log(n); // 0
