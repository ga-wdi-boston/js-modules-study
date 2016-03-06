'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path
const ourModule = require('./common');
const inline =  require('./inline');
const baby = require('./module');


// your module is available here as `ourModule`
// use it!


let age = baby.random();

console.log(age);
