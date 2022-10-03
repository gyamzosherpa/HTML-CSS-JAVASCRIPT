//....synchronous....//
// executed line by line
// each line of code waits for previous line to finish
// long running operations block code execution

console.log(' I ');
console.log(' love ');
console.log(' you ');

/* (1).................. asynchronous .................. */
// is non blocking
// does not wait for an asynchronous task to finish its work

// console.log('car 1');
// console.log('car 2');
// setTimeout(() => {
//   console.log('car 3');
// }, 3000);
// console.log('car 4');
// console.log('car 5');
// console.log('car 6');

// (2) ........callback............//
// function that is passed as an argument to another function

//example1
// let order = (call_production) => {
//   console.log('order placed, please call production');
//   call_production();
// };

// let production = () => {
//   console.log('order recieved');
// };

// order(production); //function production() is called inside order() function

//example 2
let sports = {
  football: ['manchester united', 'liverpool', 'arsenal'],
  cricket: ['pakistan', 'india', 'england'],
  basketball: ['warriors', 'lakers', 'clippers'],
};

// let new_team = (football_team, call_team) => {
//   setTimeout(function () {
//     console.log(`${sports.football[football_team]} was selected`);
//     call_team();
//   }, 1000);
// };

// let new_team_2 = () => {
//   setTimeout(() => {
//     console.log('new team has invited');
//     setTimeout(() => {
//       console.log('new team has joined');
//       setTimeout(() => {
//         console.log(`${sports.football[2]} has won the match`);
//       }, 0000);
//     }, 0000);
//   }, 0000);
// };

//new_team(0, new_team_2); //function new_team_2() is called inside new_team() function

// (3) .................promises............//
// promise is an object that represents the eventual,
// completion or failure of an asynchronous operation

// promise example 1
let cleanCamera = new Promise((resolve, reject) => {
  //cleaning camera
  let isDone = true;
  if (isDone) {
    resolve(console.log('cleaning is done'));
  } else {
    reject(console.log('cleaning is not done'));
  }
});

// cleanCamera
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// using try catch block
let cleanRoom = new Promise((resolve, reject) => {
  try {
    let isDone = true;
    if (isDone) {
      resolve(console.log('room cleaning is done'));
    }
  } catch {
    reject(console.log('cleaning is not done'));
  }
});

// promise example 2
let buildProject = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isDone = true;
    if (isDone) {
      resolve('project is finished');
    } else {
      reject('project is not finished');
    }
  }, 1000);
});

let attendTechnicalRound = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isDone = true;
    if (isDone) {
      resolve('attend technical round is done and is successful');
    } else {
      reject('not successful technical round');
    }
  }, 2000); //2000ms= 2s
});

let managerRound = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isDone = true;
    if (isDone) {
      resolve('successful manager round');
    } else {
      reject('not successful manager round');
    }
  }, 3000);
});

let hrRound = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isDone = true;
    if (isDone) {
      resolve('hrRound is finished ,get job');
    } else {
      reject('hrRound is not finished');
    }
  }, 4000);
});

buildProject
  .then((mmm) => {
    let result = `${mmm} ->`;
    console.log(mmm);
    attendTechnicalRound
      .then((message) => {
        result += `${message} ->`;
        console.log(message);
        managerRound
          .then((message) => {
            result += `${message} ->`;
            console.log(message);
            hrRound
              .then((message) => {
                result += `${message} `;
                console.log(message);
                // console.log(result);
              })
              .catch((err) => {
                console.error(err);
              });
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .catch((err) => {
    console.error(err);
  });

// ............... async await ......... //
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
