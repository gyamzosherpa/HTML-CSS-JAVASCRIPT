/*...........arrays...............*/
// const years = new Array(1990, 1969, 1948);
// console.log(years);

//only primitive value are immutable, but array is mutable because it is not a primitive value

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log(players); // [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]
console.log('total players:', players.length); //length of array, 4

console.log('first player is', players[0]); //Wes, 0 is the index of the array
console.log('last player is', players[players.length - 1]); //Poppy, -1 is the last index of the array

players[1] = 'Karen'; //change the value of the array
console.log(players); //shows the array with the changed value

const firstName = 'gyamzo'; //adding variables to the array
const details = [firstName, 'sherpa', 1996, 'designer', players];
console.log(details);

//calculate age using array
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const birthYear = [1990, 1969, 1948];
console.log('age:', calcAge(birthYear[2]));
console.log('age:', calcAge(birthYear[0]));

//shows output in array
const ages = [
  calcAge(birthYear[0]),
  calcAge(birthYear[1]),
  calcAge(birthYear[2]),
];
console.log(ages);

/*....................arrays methods.........................*/

// 1. push method, adds new element to the end of the array
const list = ['a', 'b', 'c'];
list.push('d');
console.log(list); //shows the array with the new element i.e d

// 2. pop method, removes the last element of the array
const newGames = ['pubg', 'csgo', 'fortnite'];
newGames.pop();
console.log(newGames); //shows the array without the last element

// 3. unshift method, adds new element to the beginning of the array
const newList = ['a', 'b', 'c'];
const new_list = newList.unshift('d');
console.log(newList); //shows the array with the new element i.e d
console.log(new_list); //shows the length of the array
console.log(newList.indexOf('b')); //shows the index of the element

// 4. shift method, removes the first element of the array
const games = ['pubg', 'csgo', 'fortnite'];
games.shift();
console.log(games); //shows the array without the first element

// 5. includes method, checks if the array contains the element
const games2 = ['pubg', 'csgo', 'fortnite'];
games2.push('dota'); //adds dota to the array
console.log(games2.includes('dota')); //shows true if the array contains the element
console.log(games2.includes('freefire')); //false

// 6. sort method, sorts the array in ascending order
const fruits = ['banana', 'apple', 'mango'];
fruits.sort();
console.log(fruits); //shows the array in ascending order

// 7. join method, joins the array into a string
const numbers = [1, 2, 3, 4, 5];
const joined = numbers.join(',');
console.log(joined); //shows the array as a string

// 8. reverse method, reverses the array
const numbers2 = [1, 2, 3, 4, 5];
numbers2.reverse();
console.log(numbers2); //shows the array in reverse order

// 9. concat method, joins two arrays
const numbers3 = [1, 2, 3, 4, 5];
const numbers4 = [6, 7, 8, 9, 10];
const numbers5 = numbers3.concat(numbers4);
console.log(numbers5); //shows the joined array

// 10. slice method, returns a part of the array
const numbers6 = [1, 2, 3, 4, 5];
const slice = numbers6.slice(1, 3);
console.log(slice); //shows the array from index 1 to index 3

// 11. splice method, removes elements from the array
const numbers7 = [1, 2, 3, 4, 5];
numbers7.splice(1, 2);
console.log(numbers7); //shows the array without the elements from index 1 to index 2

// 12. reduce method, reduces the array into a single value
const numbers8 = [1, 2, 3, 4, 5];
const sum = numbers8.reduce((total, current) => total + current, 0);
console.log(sum); //shows the sum of the array

// 13. max method, returns the maximum value of the array
const numbers9 = [1, 2, 3, 4, 5];
const max = Math.max(...numbers9);
console.log(max); //shows the maximum value of the array

//...................challenge 2...................//
const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; //using ternary operator
};

const bills = [125, 555, 200]; //bill amount
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; //shows the tip of the bill
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]; //shows the total of the bill
console.log(bills, tips, totals);
