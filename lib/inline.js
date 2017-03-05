'use strict';


// we want to store our generated module in `countFromZero`
// `countFromZero` now contains `incrementor` from inside `incrementX`!
let countFromZero = (function (initialValue, increment) {
  // declare some variables in here that will be hidden from outside
  let a = initialValue;

  // `incrementor` will have access to variables in this scope, such as `a`
  const incrementor = function () {
    return a+=increment;
  };

  // return the function so we can access it from outside
  return incrementor;
})(0,2); // return the incrementor function with a =0

// from here, use the module you've created
for (let index = 0; index < 10; index++) {
  let messageToBeLogged = countFromZero(); // calling function incrementor in incrementX scope with a = 0, return a which is increasing
  console.log(messageToBeLogged);
}
