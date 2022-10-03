// 'use strict';

// let hasLicense = false;
// const passTest = true;

// if (passTest) hassLicense = true;
// if (hasLicense) console.log('You are allowed to drive');
// else console.log('You are not allowed to drive');

const age = 16;

if (age >= 16) {
  console.log('You can have voter card');
} else {
  console.log('You cannot have voter card');
}

const a = 10;
const b = 20;
const c = 30;

// && operator
if (a > b && a > c) {
  console.log('a is greater than b and c');
} else {
  console.log('a is not greater than b and c');
}

const isSingle = true;

if (isSingle) {
  console.log('😔');
} else {
  console.log('😊');
}

/*............challenge no 2...........*/
const mark_weight = 78;
const mark_height = 1.69;
const mark_bmi = mark_weight / (mark_height * mark_height);
console.log(`mark bmi is ${mark_bmi}`); // mark bmi is 24.52

const john_weigth = 95;
const john_height = 1.95;
const john_bmi = john_weigth / (john_height * john_height);
console.log(`john bmi is ${john_bmi}`); // john bmi is 24.9

if (mark_bmi > john_bmi) {
  console.log(`mark bmi is greater than john bmi`);
} else {
  console.log(`john bmi is greater than mark bmi`);
}
