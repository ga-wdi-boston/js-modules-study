'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path
const ourModule = require('./common');

for (let index = 0; index < 10; index++) {
  let messageToBeLogged = ourModule.myModule();
  console.log(messageToBeLogged);
}
// your module is available here as `ourModule`
// use it!
