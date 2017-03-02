'use strict';

const incrementX = function (initialValue) {
  let a = initialValue;
  const incrementor = function () {
    return a++;
  };
  return incrementor;
};
let countFromZero = incrementX(0);

for (let index = 0; index < 10; index++) {
  let messageToBeLogged = countFromZero();
  console.log(messageToBeLogged);
}

exports.incrementor = 0;

// and

// module.exports = {
//   property1 : value1,
//   property2 : value2
// };

// the former is good for building an object one property at a time
// the latter is good for when you've already got an object or want
// to export just one thing

// here is what NOT to do:
//
// exports = { ... };

// this overwrites `exports` with a new object. fine, right?
//
// well, no. `module.exports` and `exports` are aliases starting out
// but if you do this, `exports` will point to a new object,
// while `module.exports` still points to the old one
//
// you'll lose hours of your life trying to track this bug down!
