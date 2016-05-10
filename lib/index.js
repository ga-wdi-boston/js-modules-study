'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path
const cf = require('./common');

// your module is available here as `ourModule`
// use it!

let tick = new cf();
let tock = new cf();

for (let i = 0; i <= 60; i++) {
  tick.increment();
  tock.increment();
}

tick.increment();
console.log(`Tick: ${tick.current()}`);
console.log(`Tock: ${tock.current()}`);
console.log('Tick wins?');
