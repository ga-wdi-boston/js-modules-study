'use strict';

// we want to do some work in this function


function someThing(initialValue) {
  // declare some variables in here that will be hidden from outside
  let a = initialValue;

  // `g` will have access to variables in this scope, such as `a`
  function good() {
    return a *= a;
  }

  // return the function so we can access it from outside
  return good;
}


// we want to store our generated module in `ourModule`
let ourModule = someThing(1.1); // `ourModule` now contains `g` from inside `f`!

// from here, use the module you've created
for (let index = 0; index < 10; index++) {
  let messageToBeLogged = ourModule();
  console.log(messageToBeLogged);
}

module.exports = {
  someThing,
  ourModule
};
