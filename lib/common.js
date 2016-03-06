'use strict';

// code to your heart's content
// your goal is to have something at the end to show for it
// rough goal: an object with a property containing a function
// once you've got it, assign it to `module.exports` at the
// bottom of the file
//
// if you're strapped for ideas, try re-writing cipher or randomizer code

// exporting
// there are two ways to export:

//exports.property = value;

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
let newModule = (function (array) {
  // declare some variables in here that will be hidden from outside
  let a = array;

  // `g` will have access to variables in this scope, such as `a`
  function g() {
  for (let index = 0; index < array.length; index++) {
      a[index] *= 2;
    }
    return a;
  }
  // return the function so we can access it from outside
  return g;

})([2,6,7,9]); // `ourModule` now contains `g` from inside `f`!


// from here, use the module you've created

module.exports= {newModule};
