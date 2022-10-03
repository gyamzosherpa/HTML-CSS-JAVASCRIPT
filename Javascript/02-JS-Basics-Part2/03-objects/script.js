/*...................objects....................*/
// player is an object
const player = {
  //properties
  name: 'John',
  age: 30,
  score: 4.5,
  address: 'kathmandu',
  hobbies: ['Sports', 'Cooking'],
};

//dot notation
console.log(player); //order of properties is not guaranteed
console.log(player.hobbies); // array
console.log(player.hobbies[0]); // array
console.log(player.address); // string

//bracket notation
// console.log(player['name']); // string
// const yourDetails = prompt('what do you want to know about?');
// console.log(player[yourDetails]); //we cannot use dot notation for properties that are not there

player.country = 'Nepal'; // adding a property
player['instagram'] = '@gyamzo_sherpa'; // adding a property
console.log(player);

console.log(
  ` player name is ${player.name} and his favourite hobby is ${player.hobbies[1]}`
);

/*...................objects method....................*/
const player2 = {
  name: 'John',
  age: 30,
  score: 4.5,
  hasLicense: true,
  address: 'kathmandu',
  hobbies: ['Sports', 'Cooking'],

  calcAge: function (birthYear) {
    return 2022 - birthYear;
  },

  new_score: function () {
    return this.score * 10; //this keyword is used to refer to the object
  },

  new_address: function () {
    this.second_address = 'Pokhara ,Nepal'; //adding a new property
    return this.second_address;
  },

  getSummary: function () {
    return `My name is ${this.name} I am ${
      this.age
    } years old, my new score is ${this.new_score()} and i have a license so i can ${
      this.hasLicense ? 'drive' : 'not drive'
    } and my second address is ${this.second_address}`;
  },
}; // this keyword can be used only in normal function but not in arrow function

console.log(player2.calcAge(1996));
// console.log(player2['calcAge'](1990));

console.log(player2.new_score());

player2.new_address(); // calling a new property i.e second_address

console.log(player2.getSummary());

// .............. challenge no 3 ............... //

const mark = {
  name: 'Mark',
  weight: 88,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  name: 'John',
  weight: 92,
  height: 1.55,
  calcBMI: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

const highBMI =
  mark.bmi > john.bmi
    ? `mark bmi is ${mark.bmi} higher than john bmi ${mark.bmi}` //using ternary operator
    : `john bmi is ${john.bmi} higher than mark bmi ${mark.bmi}`;

console.log(highBMI);

// if (mark.bmi > john.bmi) {
//   console.log(`mark bmi is ${mark.bmi} higher than john bmi ${mark.bmi}`);
// } else if (mark.bmi < john.bmi) {
//   console.log(`john bmi is ${john.bmi} higher than mark bmi ${mark.bmi}`);
// }
