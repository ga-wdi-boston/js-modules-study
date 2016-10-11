'use strict';

// we want to do some work in this function
// then return a module from it
// function f(initialValue) {
//   // declare some variables in here that will be hidden from outside
//   let a = initialValue;
//
//   // `g` will have access to variables in this scope, such as `a`
//   function g() {
//     return a++;
//   }
//
//   // return the function so we can access it from outside
//   return g;
// }

// we want to store our generated module in `ourModule`
let ourModule = function (initialValue) {
  // declare some variables in here that will be hidden from outside
  let a = initialValue;

  // `g` will have access to variables in this scope, such as `a`
  function g() {
    return a++;
  }

  // return the function so we can access it from outside
  return g;
}(0); // `ourModule` now contains `g` from inside `f`!

// from here, use the module you've created
for (let index = 0; index < 10; index++) {
  let messageToBeLogged = ourModule();
  console.log(messageToBeLogged);
}

// Checkpoint 0: it's not index.js, it's lib/inline.js
// Checkpoint 1: yes, parentheses break it if put before the function f and
//   after the curly brace after 'return g;'
