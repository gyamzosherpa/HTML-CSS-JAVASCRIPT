/*............ operators............*/

//............arithmetic operators...........
const a = 20;
const b = 10;
const result = a + b;
const result2 = a - b;
const result3 = a * b;
const result4 = a / b;
const result5 = a % b;

console.log(result); // 30
console.log(result2); // 10
console.log(result3); // 200
console.log(result4); // 2
console.log(result5); // 0

//declaring variable to subtract
const today = 2022;
const ageGyamzo = today - 1996;
console.log(`i m ${ageGyamzo} years old`); // i m 22 years old

//adding string
const firstName = 'gyamzo';
const lastName = 'sherpa';
console.log(`my name is ${firstName} ${lastName}`); // my name is gyamzo sherpa

//.............assignment operators...........
let x = 10;
x += 20; // x = x + 20;
x *= 2; // x = x * 2;
x++; // x = x + 1;
x--; // x = x - 1;
console.log(x);

//............comparison operators...........
const my_age = 35;
const your_age = 30;
console.log(my_age < your_age); //false

const new_score = 100;
const high_score = 300;
console.log(new_score <= high_score); // true

/*............challenge no 1...........*/
const mark_weight = 78;
const mark_height = 1.69;
const mark_bmi = mark_weight / (mark_height * mark_height);
console.log(`mark bmi is ${mark_bmi}`); // mark bmi is 24.52

const john_weigth = 95;
const john_height = 1.95;
const john_bmi = john_weigth / (john_height * john_height);
console.log(`john bmi is ${john_bmi}`); // john bmi is 24.9

console.log(`${mark_bmi > john_bmi}`); // true
console.log(`mark bmi is higher than john bmi by ${mark_bmi - john_bmi}`); // mark bmi is higher than john bmi by 0.01

//............logical operators........... //
// first learn boolean operators and then logical operators
