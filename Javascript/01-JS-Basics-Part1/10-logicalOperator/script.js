//............logical operators........... //
// if both are true i.e &&, it returns true, if one is false, it returns false
const hasLicense = true;
const hasVision = false;

console.log(hasLicense && hasVision); // false
console.log(hasLicense || hasVision); // true
console.log(!hasLicense); // false

if (hasLicense && hasVision) {
  console.log('you are eligible for driving');
} else if (hasLicense && !hasVision) {
  console.log('you are eligible for driving but you need to get a license');
} else if (!hasLicense && hasVision) {
  console.log('you are eligible for driving but you need to get a license');
} else {
  console.log('you are not eligible for driving');
}

//................challenge no 3....................
const teamA = (76 + 108 + 89) / 3;
console.log(`team A average score is ${teamA}`);

const teamB = (89 + 91 + 110) / 3;
console.log(`team B average score is ${teamB}`);

if (teamA > teamB && teamA >= 100) {
  console.log('team A wins 🏆');
} else if (teamA < teamB && teamB >= 100) {
  console.log('team B wins 🏆');
} else if (teamA === teamB && teamA >= 100 && teamB >= 100) {
  console.log('both win trophy 🏆');
} else {
  console.log('no winner 😔');
}
