'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path
const Robot = require('./common');

console.log(Robot);

let r = new Robot();

console.log(r);

r.displayOrders();
r.addOrder(() => "I exist only to serve you");
r.addOrder(() => "Who shall I destroy?");
r.addOrder((x) => x * 2);
r.displayOrders();
r.executeOrder();
r.executeOrder();
r.executeOrder(10);

// your module is available here as `ourModule`
// use it!
