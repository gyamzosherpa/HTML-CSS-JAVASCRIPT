// 1. -------------Destructuring Arrays--------------------//
const sport = {
  name: 'Sports',
  location: 'England',
  categories: ['Football', 'Cricket', 'Basketball', 'Tennis'],
  footballPlayers: ['Kane', 'Saka', 'arnold', 'foden'],
  cricketPlayers: ['root', 'stokes', 'anderson', 'buttler'],
  world_cup: function (footballIndex, cricketIndex) {
    return [
      this.footballPlayers[footballIndex],
      this.cricketPlayers[cricketIndex],
    ];
  },
};

let [first, , second] = sport.categories; // , skip
console.log(first, second);

//switching variable
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

//....... receive 2 return values from function.........//
console.log(sport.world_cup(0, 1)); // ['Kane', 'stokes']

//.................. Nested Array Destructuring...............//
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested; // i = 2, j = [5, 6]
//console.log(i, j); // [5, 6]

const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// default values
const [p, q, r] = [8, 9];
console.log(p, q, r);

// 2. --------------Destructuring objects------------------//
const restaurant = {
  full_name: 'The Restaurant',
  location: 'London',
  categories: ['Italian', 'Chinese', 'American'],
  starterMenu: ['Pizza', 'Pasta', 'Salad'],
  mainMenu: ['Burger', 'Recistik', 'CreamyChicken'],
  openingHours: {
    mon: {
      open: '10:00',
      close: '22:00',
    },
    tue: {
      open: '11:00',
      close: '23:00',
    },
    sat: {
      open: '0', //open 24 hrs
      close: '24',
    },
  },

  //ES6 Object literal shorthand
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} wii be deliverded to ${address}`
    );
  },
};

restaurant.orderDelivery({
  //order doesn't matter
  time: '12:00',
  address: 'London',
  mainIndex: 2,
  starterIndex: 1,
});

// console.log(restaurant.order(0, 2));

//destructuring properties should be same as the object properties
const { full_name, openingHours, categories } = restaurant;
console.log(full_name, openingHours, categories);

//rename or change the properties name
const {
  full_name: restaurantName,
  openingHours: Hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, Hours, tags);

//menu not defined, [] empty array will be returned, if not [] than undefined
const { menu = [], starterMenu: starters } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 777;
const obj = { a: 23, b: 45, c: 67 };
({ a, b } = obj);
console.log(a, b);

//.....................destructuring nested objects..................//
const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c);

// 3. ---------------spread operator-------------------//
console.log('spread operator ...');

const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8];

const badArr = [1, 2, arr[2], arr[3], arr2[0], arr2[1]];
console.log(badArr);

const newArr = [...arr, ...arr2, 9, 10, 11];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array, shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 or more arrays
const old_menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(`old menus: ${old_menu}`);

//Iterables : Arrays, Strings, Maps, Sets, Not objects
const str = 'hello';
const letters = [...str, '', 'w']; // ['h', 'e', 'l', 'l', 'o', 'w', '.']
console.log(letters);

//using spread operator in objects
const new_restaurant = { foundedIn: '1956', ...restaurant, founder: 'gyamzo' };
console.log(new_restaurant);

const restaurantCopyName = { ...restaurant };
restaurantCopyName.name = 'the new home'; //mutate
console.log(restaurantCopyName.name);
console.log(restaurant.full_name);

// 4. -----------------REST operator-----------------------//
const new_arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =,
const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(x, y, others);

const [food1, food2, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(food1, food2, otherFood);

//using rest operator in objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//using rest operator in functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};

add(2, 3);
add(4, 5, 6);
add(2, 4, 6, 7, 8, 9, 0);

//5. --------------short circuiting -------------//
//.....use ANY data type, return ANY data type.......//
console.log(3 || 'gyamzo'); //3, because 3 is truthy values
console.log('' || 'gyamzo'); //gyamzo, because '' is falsy values
console.log(true || 0); //true, because 0 is falsy values
console.log(undefined || null); //null, because undefined is falsy values

console.log(undefined || 0 || '' || 'gyamzo' || 23); //gyamzo, because it is the first truthy value

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //10, because restaurant.numGuests is not defined

const guests2 = restaurant.numGuests || 20;
console.log(guests2);

console.log('---AND----');
console.log(0 && 'gyamzo'); //0, because 0 is falsy values
console.log(7 && 'gyamzo'); //gyamzo, because 7 is truthy values

console.log('hello' && 20 && null && 'gyamzo'); //null, because 20 is falsy values

//6. -------------------for of loop-----------------------//
const m_menu = [restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of m_menu) {
  console.log(item);
}

//entries() returns an array of arrays
for (const [i, el] of m_menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// 7. -----------------enhanced object literals----------------//

const addDetail = {
  isMarried: true,
  address: 'London',
};

// i. ES6 property value shorthand
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const practiceSession = {
  [weekDays[0]]: {
    in: 10,
    out: 12,
  },
  [weekDays[1]]: {
    in: 5,
    out: 7,
  },
  [weekDays[2]]: {
    in: 0,
    out: 10,
  },
};

const playerDetails = {
  name: 'gyamzo',
  age: 23,
  score: 100,
  rank: 'gold',
  isActive: true,
  hobbies: ['coding', 'reading', 'gaming'],
  fav_players: ['messi', 'ronaldo', 'neymar'],

  // ii. outer function can be called inside object literal
  new_detail: addDetail,

  // iii. No need to write function keyword, ES6 will automatically create a function
  sub(a1, b1) {
    return a1 - b1;
  },
  dailyExercise: practiceSession,
};

console.log(playerDetails, playerDetails.sub(10, 5));

// 8. ---------------WITH OPTIONAL CHAINING-------------//
//loops
for (const day of weekDays) {
  const open = playerDetails.dailyExercise[day]?.in || 'working days'; //?. is optional chaining, when we replace || with ??, it will return 0
  console.log(`On ${day} he practise for ${open} hours`);
}

//methods
console.log(playerDetails.new_detail?.[0] ?? 'does not exist'); //?? is nullish coalescing operator, nullish is undefined, null, and NaN

//arrays
const users = [{ name: 'gyamzo', email: 'megyamzo@gmail.com' }];
console.log(users[0]?.name ?? 'does not exist'); //gyamzo

// 9. --looping objects, object keys, values and entries--//

// a. Properties names, Object.keys() returns an array of keys
const properties = Object.keys(practiceSession); //returns an array of keys
console.log(properties);

let openStr = `we are open on ${properties.length} days `;
for (const day of Object.keys(practiceSession)) {
  openStr += `${day}, `;
}
console.log(openStr);

// b. Properties values, Object.values() returns an array of values
const values = Object.values(practiceSession); //returns an array of values
console.log(values);

// c. Properties entries (names + values), Object.entries() returns an array of arrays
const entries = Object.entries(practiceSession); //returns an array of arrays
console.log(entries);

for (const x of entries) {
  console.log(`on ${x[0]} he practise for ${x[1].in} hours`);
}

// 10. ----------------------SETS------------------------//
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

const playerSet = new Set([
  //creates a set
  'gyamzo',
  'messi',
  'neymar',
  'ronaldo',
  'haaland',
  'aguero',
]);

console.log(playerSet);

console.log(new Set('sherpa')); //set are defined as new Set()

console.log(playerSet.size); // returns the size of the set
console.log(playerSet.has('messi')); //returns true if the value is present in the set
console.log(playerSet.add('saka')); //adds a new value to the set
console.log(playerSet.delete('neymar')); //deletes a value from the set

// looping through sets
for (const player of playerSet) {
  console.log(player);
}

// convert set to array
const staff = ['waiter', 'cook', 'cashier', 'cook', 'driver'];
const staffUnique = [...new Set(staff)]; //convert into set and then convert into array
console.log(staffUnique);

console.log(
  new Set(['waiter', 'cook', 'cashier', 'cook', 'driver', 'manager']).size
); //set will not allow duplicates

console.log(new Set('gyamzosherpa').size); //set will not allow duplicates

// 12. ------------------------MAPS-----------------------//
const rest = new Map(); //creates a map
rest.set('name', 'classic gyamzo'); //adds a new key-value pair
rest.set(1, 'gyamzo sherpa');
rest.set(2, 'gyamzo sherpa2');
console.log(rest.set(3, 'gyamzo sherpa3'));

rest
  .set('categories', ['asian', 'italian', 'dessert'])
  .set('rating', 4.5)
  .set('isOpen', true)
  .set('isClose', false);

console.log(rest.get('name'));
console.log(rest.get('rating'));
console.log(rest.get('isOpen'));
console.log(rest.get(1));

console.log(rest.has('rating')); //returns true if the key is present in the map
//console.log(rest.delete(1)); //deletes a key-value pair

console.log(rest.size); //returns the size of the map

const arr3 = [1, 2];
console.log(rest.set(arr3, 'Test')); //sets a key-value pair with a key that is an array

console.log(rest.get(arr3)); //returns the value of the key that is an array

//....maps iteration.......//
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'JavaScript'],
  [3, 'Python'],
  [4, 'Java'],
  ['correct', 2],
  [true, 'Correct 📍'],
  [false, 'wrong'],
]);

console.log(question.get('question')); //returns the value of the key 'question'
for (const [key, value] of question) {
  //looping through maps
  if (typeof key === 'number') {
    //if the key is a number
    console.log(`Answer ${key}: ${value}`); //returns the value of the key 'question'
  }
}

// const answer = Number(prompt('What is the correct answer?'));
const answer = 2;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]); //convert map to array
console.log([...question.keys()]); //convert map keys to array
console.log([...question.values()]); //convert map values to array

// 14. ---------Working with Strings Part-1---------//
const movie = 'kabaddi kabaddi';
const actor = 'dayahang rai';
console.log(movie.startsWith('Kabaddi')); //returns true if the string starts with the given string
console.log(movie[0]); //returns the character at the given index
console.log(movie.indexOf('a')); //returns the index of the first occurrence of the given string
console.log(movie.lastIndexOf('a')); //returns the index of the last occurrence of the given string

// slice method returns a new string that is a portion of the original string
console.log(movie.slice(1, 5)); //returns the characters from the given start index to the given end index
console.log(actor.slice(5)); //ang rai

console.log(movie.slice(0, movie.indexOf(' '))); //returns the characters from the given start index to the given end index
console.log(movie.slice(-2)); //returns the last two characters

//lets play some fun game
const checkSeat = function (seat) {
  const s = seat.slice(-2); //returns the last two characters
  if (s === 'BB' || s === 'CC') {
    console.log('you got the seat');
  } else {
    console.log('sorry no ticket left');
  }
};

checkSeat('11BB');
checkSeat('11A');
checkSeat('11CC');

// some string methods //
console.log(movie.toUpperCase()); //returns the string in upper case
console.log(actor.toLowerCase()); //returns the string in lower case

console.log(movie.includes('kabaddi')); //returns true if the string contains the given string
console.log(movie.startsWith('kabaddi')); //returns true if the string starts with the given string

//split and join methods
console.log('a+very_nice+movie'.split('+')); //returns an array of substrings

const [firstName, lastName] = 'gyamzo sherpa'.split(' ');
const newName = ['Mr.', firstName, lastName].join(' '); //returns a string with the elements of the array joined by the given separator
console.log(newName);
