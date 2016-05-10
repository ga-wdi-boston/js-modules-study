'use strict';

// we want to do some work in this function
// then return a module from it
function f(initialValue) {
  // declare some variables in here that will be hidden from outside
  let a = initialValue;

  // `g` will have access to variables in this scope, such as `a`
  function g() {
    let ary = []
    for (let i = 0; i < 100; i += 3) {
      ary.push(Math.pow(a, i));
    }
    console.log(ary);
    return ary;
  }

  // return the function so we can access it from outside
  return g;
};

// we want to store our generated module in `ourModule`
let ourModule = (f(5)); // `ourModule` now contains `g` from inside `f`!

// from here, use the module you've created
for (let index = 0; index < 10; index++) {
  let messageToBeLogged = ourModule();
  console.log(messageToBeLogged);
}

module.exports = f;
