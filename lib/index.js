'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path
const ourModule = require('./common');

const doWork = function () {
    for (let index = 0; index < 25; index++) {
    let messageToBeLogged = "There are " + ourModule.countFromZero() + " days left until Christmas!";
    console.log(messageToBeLogged);
  }
};

doWork();

// your module is available here as `ourModule`
// use it!
console.log(typeof ourModule);
