const firstName = 'gyamzo';
const job = 'developer';
const birthYear = 1996;

//string template literal
const result =
  'My name is ' +
  firstName +
  '. I am a ' +
  job +
  ' and I was born in ' +
  birthYear;
console.log(result);

const his_name = 'john';
const his_age = 30;
const his_job = 'teacher';
const birth_year = 1995;

//... \n is new line ..........
const result2 = `his name is ${his_name} and he is ${his_age} years old, \n he is a ${his_job} and was born in ${birth_year}`;
console.log(`${result2}`);
