/* 
  "==" is the equality operator. It checks if the values on either side of the
  operator are equal. It perform type coercion. i.e "18" == 18 is true.
  <br />
  "===" is the strict equality operator. It checks if the values on either side
  of the operator are equal and of the same type. It does not perform type
  coercion. i.e "18" === 18 is false.
 */

const age = 20;
if (age === 20) console.log('You can have citizenship');

const score = '10';
if (score === 10) {
  console.log('You got a low score');
} else {
  console.log('wrong score');
}

const favNum = prompt('what is ur favourite number?'); //string
console.log(favNum);
console.log(typeof favNum); // string

if (favNum == 10) {
  // "==" is the equality operator,but if "===", it retruns false
  console.log('you got the right number'); // true
}
