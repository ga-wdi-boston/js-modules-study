'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path

// const ourModule = require('./inline.js');
const ourModule = require('./common');

let value = 80;
for (let i = 0; i < 10; i++) {
  value = ourModule.crazyNumbers(value);
  console.log(value);
}

// your module is available here as `ourModule`
// use it!
console.log(typeof ourModule);
