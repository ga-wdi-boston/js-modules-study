'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path
const ourModule = require('./common');

console.log(typeof ourModule);
console.log(ourModule.checkPalindrome('CALEB'));
console.log(ourModule.checkPalindrome('KAYAK'));
