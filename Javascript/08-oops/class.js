// //create class
// class Person {
//   //constructor gets call automatically
//   constructor(n, a) {
//     // console.log('person created');
//     this.name = n;
//     this.age = a;
//   }
//   //method
//   sayHi() {
//     console.log('Hi....');
//   }

//   static address = 'london';
//   //static methods
//   static hello() {
//     console.log('hello');
//   }
// }

// //create object
// let person1 = new Person('gyamzo', 26);
// person1.sayHi();

// //static "hello", gets call from class not from object
// //person1.hello(); //Uncaught TypeError: person1.hello is not a function
// Person.hello(); //no error

// console.log(person1.address); //undefined due to static
// console.log(person1);

//class inheritance and super
class Employee {
  constructor(n) {
    // console.log('employee class created');
    this.name = n;
  }
  msg() {
    console.log('.....Hi....');
  }
}

//inherit properties from Employee class
class Manager extends Employee {
  constructor(p, d) {
    super(p); //p = n
    this.department = d;
  }
  msg() {
    console.log('hello worlds');
  }
  info() {
    //if you have to call parent method inside child method
    // you should use super
    super.msg(); // ......Hi......, inherit parent properties
    this.msg(); // "hello worlds", this refer to its current properties

    //for properties, "this will work"
    console.log(this.name + ' is manager of department ' + this.department);
  }
}
//admin can access from both employee and manager
class admin extends Manager {}

let admin1 = new admin('gyamzo', 'web-developer');
console.log(admin1);
console.log(admin1.info());
