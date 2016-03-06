'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path
const ourModule = require('./common');
const myModule = require('./inline');
// your module is available here as `ourModule`
// use it!
ourModule.inline();
