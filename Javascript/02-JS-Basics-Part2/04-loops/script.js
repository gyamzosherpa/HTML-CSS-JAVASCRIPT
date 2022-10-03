/* .............for loops.......... */
// 1st part is the initialization of the loop
// 2nd part is the condition of the loop
// 3rd part is the increment of the loop

// for (let n1 = 1; n1 <= 10; n1++) {
//   console.log(`new value is ${n1} 💡`); //keeps running until the condition is true
// }

const gyamzoArray = [
  'gyamzo',
  'sherpa',
  27,
  'developer',
  ['footballl', 'cricket', 'hockey'],
  true,
];

const types = [];

// length defines the number of elements in the array
for (let i = 0; i < gyamzoArray.length; i++) {
  console.log(gyamzoArray[i], typeof gyamzoArray[i]); //typeof is used to check the type of the element
  //   types[i] = typeof gyamzoArray[i];
  types.push(typeof gyamzoArray[i]); //here push add the type of the element to the types array
}
console.log(types);

const years = [1990, 1965, 1937, 2005, 1998];
const ages = [];
for (let i = 0; i < years.length; i++) {
  //   ages[i] = 2020 - years[i];
  ages.push(2022 - years[i]);
}
console.log(ages);

/*.........continue and break statements........ */
console.log('---only strings---');
for (let i = 0; i < gyamzoArray.length; i++) {
  if (typeof gyamzoArray[i] !== 'string') continue; //continue skips the current iteration and goes to the next iteration
  console.log(gyamzoArray[i]);
}

console.log('---only numbers---');
for (let i = 0; i < gyamzoArray.length; i++) {
  if (typeof gyamzoArray[i] == 'number') break; //break stops the loop
  console.log(gyamzoArray[i]);
}

//looping from backwards
for (let i = gyamzoArray.length - 1; i >= 0; i--) {
  console.log(i, gyamzoArray[i]);
}

//.............loops inside loops............//
//........square of stars.............
let n = 5; // row or column count
let string = ''; // defining an empty string

for (let i = 0; i < n; i++) {
  // external loop
  for (let j = 0; j < n; j++) {
    // internal loop
    string += '*';
  }
  // newline after each row
  string += '\n';
}
// printing the string
console.log(string);

//.......print of stars..............//
for (let i = 0; i < 5; i++) {
  // outer loop
  let str = '';
  for (let j = 0; j < i; j++) {
    // inner loop
    str += '*';
  }
  console.log(str);
}

/* ............while loop ............... */
// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//print stars
// let str = '';
// while (str.length < 5) {
//   console.log(str);
//   str += '*';
// }

//...............challenge no 4..............//

const calculateTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.12;
};

const bills = [100, 200, 300, 400, 500, 30, 50, 80, 70, 20];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calculateTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}
console.log(bills, tips, totals);

const calculateAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // console.log(sum);
  return sum / arr.length;
};

console.log(calculateAverage(tips)); //average tip
console.log(calculateAverage(totals)); //average of the tips
