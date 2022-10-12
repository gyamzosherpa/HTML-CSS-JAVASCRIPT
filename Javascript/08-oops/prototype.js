//objects
let extraMethods = {
  sayHi() {
    console.log('hello');
  },
  sayBye() {
    console.log('bye');
  },
};
let extraMethods2 = {
  text() {
    console.log('text');
  },
  call() {
    console.log('call');
  },
};
//class
class user {
  constructor() {
    this.name = 'gyamzo';
  }
}
class admin extends user {}
// adding a method to the class user
Object.assign(admin.prototype, extraMethods);
Object.assign(admin.prototype, extraMethods2);
Object.assign(admin.prototype, extraMethods2);

let admin1 = new admin();
console.log(admin1);
console.log(admin1.sayBye()); //"bye"
console.log(admin1.call()); //"call"
