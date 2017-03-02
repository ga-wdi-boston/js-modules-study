'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path
const ourModule = require('./common');

// your module is available here as `ourModule`
// use it!

ourModule.addItem({ item: 'eggs', price: 2.99 });
ourModule.addItem({ item: 'cheese', price: 2.99 });
ourModule.addManyItems([{ item: 'hamburger', price: 7.99 },{ item: 'bread', price: 4.99 }]);
ourModule.removeItem({ item: 'eggs', price: 2.99 });


console.log(ourModule.getItemCount());
console.log(ourModule.getTotal());
