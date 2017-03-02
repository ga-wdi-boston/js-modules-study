'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path
const ourModule = require('./common');

let model = new ourModule('Hugo', 5);

console.log(model.get_name() + ' is ' + age + ' year' + (age == 1? '': 's') + ' old');
// your module is available here as `ourModule`
// use it!
console.log(typeof ourModule);
