'use strict';

// we want to do some work in this function
// then return a module from it
const incrementX = function (initialValue) {
  // declare some variables in here that will be hidden from outside
  // a will be the argument
  let a = initialValue;

  // `incrementor` will have access to variables in this scope, such as `a`
  // function below increase the initial value by 1
  const incrementor = function () {
    return a++;
  };

  // return the function so we can access it from outside

  return incrementor;
};

// we want to store our generated module in `countFromZero`
// `countFromZero` now contains `incrementor` from inside `incrementX`!
// Gives the incrementX an argument of 0
let countFromZero = incrementX(7);

// from here, use the module you've created
for (let index = 0; index < 10; index++) {

  // Runs function countFromZero and assigns to messageToBeLogged
  let messageToBeLogged = countFromZero();

  // Prints message
  console.log(messageToBeLogged);
}
