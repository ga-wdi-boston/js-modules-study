'use strict';

// we want to do some work in this function
// then return a module from it
let leModule = (function f(initialValue) {
  // declare some variables in here that will be hidden from outside
  let a = initialValue;

  // `g` will have access to variables in this scope, such as `a`
  function g() {
    return a * a;
  }

  // return the function so we can access it from outside
  return g;
})(3);

// we want to store our generated module in `ourModule`
// let ourModule = f(2); // `ourModule` now contains `g` from inside `f`!

// from here, use the module you've created
for (let index = 0; index < 10; index++) {
  let messageToBeLogged = leModule();
  console.log(messageToBeLogged);
}
