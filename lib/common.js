'use strict';
//Too abstract for me to think about some example of node.js module when I don't have fundations.

//Those comments don't light the way.

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

module.exports = function(name, age) {

    this.name = name;
    this.age = age;

    this.get_name = function() {
        return this.name;
    }

    this.get_age = function() {
        return this.age;
    }
};

module.exports = {
  name : Hugo,
  age : 5
};
