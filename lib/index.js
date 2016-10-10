'use strict';

// this is how we import modules
// for modules registered with npm, we merely give a name
// for our own files, we give a relative path

const ToggleUnitFactory = require('./common');
// import { ToggleUnitFactory } from './common.js';

let factory = new ToggleUnitFactory();

let siegeTank = factory.createUnit('siegeTank');
let viking = factory.createUnit('viking');
let marine = factory.createUnit('marine');

console.log("I am a", siegeTank.getType(), "and I do", siegeTank.getOutput(), " damage!");

siegeTank.toggle();

console.log("I am a", siegeTank.getType(), "and I do", siegeTank.getOutput(), "damage!");
// your module is available here as `ourModule`
// use it!
