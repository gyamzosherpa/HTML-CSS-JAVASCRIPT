/*........simple function...........*/
function hello() {
  console.log('hello world');
}

//calling, running, invoking the function
hello();
hello();
hello();

//function with parameters
function mernRoadmap(html, css, js) {
  console.log(
    `You have to learn html ${html} then css ${css} and javascript ${js}`
  );
}
mernRoadmap('first', 'second', 'third'); //arguments passed to the function

function playerList(name, age, country) {
  const player = `${name} is ${age} years old and lives in ${country}`;
  return player;
  //if we dont use return, the function will return undefined
}

//creating a variable and passing arguments to the function
const playerDetails = playerList('John', 25, 'USA');
console.log(playerDetails);

/*...... function declaration vs function expression....... */

//.........function declaration.............//
const myAge = calculateAge(1996); // can also initialize before function declaration

function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}
console.log(`My age is ${myAge}`);

//.....anonymous function, function without a name........//
//..........function expression.........//
const calculateAge2 = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};
const age2 = calculateAge2(1990); //first function should be defined then called.
console.log(`Her age is ${age2}`);

/*.............Arrow function....................*/

const calcAge = (birthYear) => new Date().getFullYear() - birthYear;
const age3 = calcAge(1990); //return statement is not needed in one line arrow function
console.log(age3);

const newUser = (name, age, country) => {
  const user = `${name} is ${age} years old and lives in ${country}`;
  return user;
};

const userDetails = newUser('John', 25, 'USA');
console.log(userDetails);

/*............function calling another function............*/

function cutPieces(fruit) {
  return fruit * 3;
}

function fruitMachine(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  return `You have ${applePieces} apple pieces and ${orangePieces} orange pieces`;
}
console.log(fruitMachine(5, 10));

/*............challenge no 1............*/

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreA = calcAverage(23, 45, 34);
const scoreB = calcAverage(1, 3, 8);
console.log(`The average score of A is ${scoreA} and B is ${scoreB}`);

const checkWinner = function (avg_scoreA, avg_scoreB) {
  //avg_scoreA and avg_scoreB get values from the above calcAverage function
  if (avg_scoreA >= 2 * avg_scoreB) {
    return 'A is the winner 🏆';
  } else if (avg_scoreB >= 2 * avg_scoreA) {
    return 'B is the winner 🏆';
  } else {
    return 'Draw 📍';
  }
};

console.log(checkWinner(scoreA, scoreB)); //passing the values to the function
