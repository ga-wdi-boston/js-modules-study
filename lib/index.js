'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path
const ourModule = require('./common');
const Basketball = ourModule.Basketball;

let array = [0,1,2,3,4];

console.log(ourModule.shuffle(array));

let color = 'orange';
let make = 'spalding';

let ball = new Basketball(color, make);

console.log(ball.describe());

// your module is available here as `ourModule`
// use it!
