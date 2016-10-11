'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path
const rectangle = require('./common');

// your module is available here as `ourModule`
// use it!

console.log(rectangle.area(3, 5));
console.log(rectangle.perimeter(3, 5));
console.log(rectangle.isSquare(3, 5));
