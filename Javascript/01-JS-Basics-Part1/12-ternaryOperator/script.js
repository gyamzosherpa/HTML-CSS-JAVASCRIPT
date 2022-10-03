/*..........ternary operator(conditional operator).................*/
//ternary operator is a shortcut for an if else statement.

const age = 10;
const canVote = age >= 18 ? 'you are eligible to vote' : 'no, you cannot vote';
console.log(canVote);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'juice'}`);

// .............challenge #4 ...........
const billAmount = 400;
const tipPercentage = billAmount >= 50 && billAmount <= 300 ? 0.15 : 0.2;
const isTrue = console.log(
  billAmount >= 50 && billAmount <= 300 ? true : false
);
console.log(`Tip percent is ${tipPercentage}`);

const totalAmount = billAmount + billAmount * tipPercentage;
console.log(`total amount is ${totalAmount}`);
