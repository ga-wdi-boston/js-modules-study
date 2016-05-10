'use strict';


// we want to store our generated module in `ourModule`
let ourModule = (function f(initialValue) {
  // declare some variables in here that will be hidden from outside
  let a = initialValue;

  // `g` will have access to variables in this scope, such as `a`
  function g() {
    return Math.ceil(Math.random() * a);
  }

  // return the function so we can access it from outside
  return g;
})(100); // `ourModule` now contains `g` from inside `f`!

// from here, use the module you've created
for (let index = 0; index < 10; index++) {
  let messageToBeLogged = ourModule();
  console.log(messageToBeLogged);
}
