'use strict';

// we want to do some work in this function
// then return a module from it
function ( f (initialValue) {
  // declare some variables in here that will be hidden from outside
  let a = initialValue;

  // `g` will have access to variables in this scope, such as `a`
  function g() {
    return a++;
  }

  // return the function so we can access it from outside. ourModule now
  // don't have access to f.
  return g;
});

// I'm not getting the same with parens around function.

// we want to store our generated module in `ourModule`
let ourModule = f(0); // `ourModule` now contains `g` from inside `f`!

// from here, use the module you've created
for (let index = 0; index < 10; index++) {
  let messageToBeLogged = ourModule();
  console.log(messageToBeLogged);
}

//
// ~/wdi/study/js-modules-study (study)$ node lib/inline.js
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// ~/wdi/study/js-modules-study (study)$
