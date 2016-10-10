'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path
const ourModule = require('./common');

// your module is available here as `ourModule`
// use it!
let array = [1, 2, 3, 4, 5];
console.log(ourModule.randomizer(array));
