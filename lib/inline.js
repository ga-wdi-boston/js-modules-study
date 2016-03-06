'use strict';

// we want to do some work in this function
// then return a module from it
let nicksMod = (function f(initialValue) {
  // declare some variables in here that will be hidden from outside
  let a = initialValue;

  // `g` will have access to variables in this scope, such as `a`
  function g() {
    return a++;
  }

  // return the function so we can access it from outside
  return g;
})(10);

// we want to store our generated module in `ourModule`
//ourModule = f (0); // `ourModule` now contains `g` from inside `f`!

// from here, use the module you've created
for (let index = 0; index < 10; index++) {
  let messageToBeLogged = nicksMod();
  console.log(messageToBeLogged);
}

// // adding example
// function firstValues (v1, v2) {
//   let firstNum = v1;
//   let secondNum = v2;
//
//   function addEm() {
//     return firstNum + secondNum;
//   }
//
//   return addEm;
// }
//
// let myAddModule = firstValues(10, 10);
//
// let printTotal = myAddModule();
//
// console.log(printTotal);
