'use strict';

const ourModule = require('./common');
const Monster = ourModule.Monster;

let array = [1,2,3,4,5];

console.log(ourModule.shuffle(array));

let color = 'blue';
let type = 'yeti';

let bigFoot = new Monster(color, type);

console.log(bigFoot.describe());
