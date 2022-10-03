// five falsy values: 0, ' ', undefined, null , Nan

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('gyamzo')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 0; //falsy value
if (money) {
  console.log('You have money');
} else {
  console.log('You should get a job');
}

let height;
if (height) {
  console.log('height defined');
} else {
  console.log('height not defined'); //undefined
}
