'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path

const inline =  require('./inline');

const numbers = require('./module');

let total = numbers.sum();

console.log(total);




// your module is available here as `ourModule`
// use it!
