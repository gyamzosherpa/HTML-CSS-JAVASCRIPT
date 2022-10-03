//............ this keyword .............. //
'use strict'; // to make sure that this keyword is not used in the global scope

console.log(this); // window object

const myAge = function (birthYear) {
  console.log(2053 - birthYear);
  console.log(this);
};
myAge(1994);

//second example
const gyamzo = {
  birthYear: 1994,
  calcAge: function () {
    console.log(this);
    console.log(2020 - this.birthYear);
  },
};
gyamzo.calcAge();
