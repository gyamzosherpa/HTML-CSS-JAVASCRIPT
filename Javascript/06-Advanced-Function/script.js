// (1).........Default parameters.......//

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 2,
  price = 200 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 0; // if numPassengers is undefined, set it to 0
  // price = price || 200; // if price is undefined, set it to 200
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('BA123', 4, 500); // { flightNum: 'BA123', numPassengers: 4, price: 1000 }
createBooking('CA123'); // numPassengers = 2, price = 400
createBooking('DA123', 3); //600
createBooking('DA123', undefined, 5000); //5000

//second example

const flight = 'BA123';
const gyamzo = {
  name: 'Gyamzo',
  passport: 12345,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH123';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 12345) {
    console.log('Welcome, ' + passenger.name);
  } else {
    alert('wrong passport');
  }
};
checkIn(flight, gyamzo);

console.log(flight);
console.log(gyamzo);

// is the same thing as doing
const flightName = flight;
const passenger = gyamzo;

// const newPassport = function (person) {
//   person.passport = Math.floor(Math.random() * 1000000);
// };

// newPassport(gyamzo);
// checkIn(flight, gyamzo);

// (2)...........Higher order function example ............//
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase(); //this is a regular expression
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// this is a higer order function, because it takes a function as an argument
const transformer = function (str, fn) {
  console.log(`original string : ${str}`);
  console.log(`transformed strings: ${fn(str)}`);

  console.log(`transformed by: ${fn.name}`); //this is a property of the function
};

transformer('js is the best', upperFirstWord);
transformer('js is the best', oneWord);

// JS uses callbacks to pass functions as arguments to other functions
// JS uses callback all the time
const high5 = function () {
  console.log('✋');
};

// addEventListener is higher order function here, because it takes a function 'high5' as an argument
document.body.addEventListener('click', high5);
['gyamzo', 'sherpa'].forEach(high5);

//......function returning function -example-........//

// const greet = function(greeting){
//   return function(name){
//     console.log(`${greeting} ${name}`); //this is a closure
//   }
// }

//using arrow function, one liner code
const greet = (greeting) => (name) => {
  console.log(`${greeting} ${name}`); //this is a closure
};

const greeterHey = greet('Hey'); //calling greet , greeterHey becomes a function
greeterHey('Gyamzo');
greeterHey('Sherpa');

greet('Hey')('Gyamzo'); //this is a closure

// (3)...........Call and Apply methods.............//
const newFlight = {
  airline: 'BA',
  iataCode: 'BA123',
  bookings: [],
  //book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iatacode}${flightNum}`,
      name,
    });
  },
};

newFlight.book(123, 'Gyamzo');
newFlight.book(12345, 'Cena');
console.log(newFlight.bookings); // [{ flight: 'BA123123', name: 'Gyamzo' }, { flight: 'BA12345', name: 'Cena' }]

//added new flight 😊
const nepalAirlines = {
  airline: 'Nepal Airlines',
  iataCode: 'NEPAL',
  bookings: [],
};

const new_book = newFlight.book; // new_book becomes a function

// does not work
// new_book(23, 'buddha airline');

// Call method - used to call a function with a given this value and arguments provided individually
new_book.call(nepalAirlines, 23, 'buddha');
console.log(nepalAirlines); // { name: 'Nepal Airlines', iataCode: 'NEPAL', bookings: [ { flight: 'NEPAL23', name: 'buddha' } ] }

new_book.call(newFlight, 234, 'bobby');
console.log(newFlight);

//added new flight 😊
const nepal2Airline = {
  airline: 'Nepal New Airlines',
  iataCode: 'NEP2',
  bookings: [],
};

new_book.call(nepal2Airline, 253, 'john cena');
console.log(nepal2Airline);

// Apply method - same as call method but it takes an array as an argument
const flightData = [456, 'kali'];
new_book.apply(nepal2Airline, flightData);
console.log(nepal2Airline);

//same as Apply method
new_book.call(nepal2Airline, ...flightData);
console.log(nepal2Airline);

// (4)...........Bind method.............//
// defines a new function that, when invoked,
// has its this keyword set to the provided value,
// with a given sequence of arguments preceding
// any provided when the new function is called.

const bookNepal = new_book.bind(nepal2Airline);
bookNepal(34, 'john cena');

const bookNepal123 = new_book.bind(nepal2Airline, 12345);
bookNepal123('john cena 2');
bookNepal123('john cena 3');

// (5)......Immediately Invoked Function Expression (IIFE)....//
// IIFE is a function that is immediately invoked

const runOnce = function () {
  console.log('this will never run again');
};
runOnce();

// converting function into expression
(function () {
  console.log('this will run once'); //imeediately invoked
})();

(() => console.log('this will also run once'))(); // using arrow function

// (6)...................Closures.....................//
// => function bind together with a lexical environment
// => function along with its lexical scope forms a closure

// example 1
function x() {
  const a = 7;
  function y() {
    console.log(a); // 7, its a closure
  }
  y();
}
x();
