/*..................scoping.................................*/

//....................first example..............//
const myName = 'gyamzo';

function first() {
  const age = 28;

  if (age >= 28) {
    const decade = 3;
    var millenial = true;
  }

  function second() {
    const job = 'teacher';
    console.log(`${myName} is a ${age} years old ${job}`);
  }
  second();
}
first();

//................second example..............//

function calcAge(birthYear) {
  const age = 2030 - birthYear;

  function printAge() {
    // inner scope, can access from outer scope .i.e. age and birthYear
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    //block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      // creating NEW variable with same name as outer scope's variable
      const firstName = 'john';

      //Reassigning outer scope's variable
      output = 'New Output';

      const str = `oh, and u are a millinial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(add(1, 2));
    //console.log(str); //shows error, because const and let are block scope and cannot access, but var can.
  }

  printAge();

  console.log(firstName);
  return age;
}

//firstName is global variable
const firstName = 'gyamzo';
calcAge(1990);
// console.log(age); //shows error because outer scope cannot acces from inner scope
// printAge();
