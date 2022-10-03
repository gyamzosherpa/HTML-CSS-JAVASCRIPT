//............hoisting................//
/* => Hoisting is a JavaScript mechanism where variables and function 
    declarations are moved to the top of their scope before code execution.
    It makes some types of variables and functions accessible before they are declared.,
*/

// example 1
// const fullName = 'gyamzo';
// if (fullName === 'gyamzo') {
//   console.log(`gyamzo is a ${job}`); //shows error, because job is not defined
//   const age = 2038 - 1996;
//   console.log(age);
//   const job = 'teacher';
//   console.log(x);
// }

// example 2, variables are hoisted to the top of their scope
console.log(me); //temperal dead zone error
//console.log(skill); //temperal dead zone error
//console.log(power); //temperal dead zone error

var me = 'gyamzo';
const skill = 'javascript';
let power = 'super';

// example 3 with functions
console.log(addDecl(1, 2));
console.log(addExpr(1, 2)); //temperal dead zone error, because of hoisting
console.log(addArrow(1, 2)); //temperal dead zone error, because of hoisting

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  //hoisting variable i.e const addExpr = function(a, b)
  return a + b;
};

var addArrow = (a, b) => a + b; // not a function error, because of hoisting
