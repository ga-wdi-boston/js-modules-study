'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path
const ourModule = require('./common');
let email = process.argv[2];
let address = process.argv[3];
let account = ourModule.myFunction(email, address);
console.log(account("email"));
console.log(account("address"));
// your module is available here as `ourModule`
// use it!
console.log(typeof ourModule);
