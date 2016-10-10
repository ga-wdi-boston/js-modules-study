'use strict';

// code to your heart's content
// your goal is to have something at the end to show for it
// rough goal: an object with a property containing a function
// once you've got it, assign it to `module.exports` at the
// bottom of the file
//
// if you're strapped for ideas, try re-writing cipher or randomizer code

// double yoo tee eff mate.
const SiegeTank = function () {
  this.state = 200;
  this.output = 5;
  this.modifier = 15;
};

const Viking = function () {
  this.state = 150;
  this.output = 10;
  this.modifier = 5;
};

const Marine = function () {
  this.state = 100;
  this.output = 5;
  this.modifier = 1;
};

module.exports = function ToggleUnitFactory() {
  this.createUnit = function (type) {
    let unit;
    
    
    switch (type) {
      case 'siegeTank':
        unit = new SiegeTank();
        break;
      case 'viking':
        unit = new Viking();
        break;
      case 'marine':
        unit = new Marine();
        break;
    }
    
    unit.type = type;
    unit.mode = false;
    
    // is this possible with fat arrow notation?
    unit.getType = function() {
      return this.type;
    };
    unit.getMode = function() {
      return this.mode;
    };
    unit.getState = function() {
      return this.state;
    };
    unit.getOutput = function() {
      return this.output;
    };
    
    unit.toggle = function () {
      if (this.mode) {
        this.mode = false;
        this.output -= this.modifier;
      } else {
        this.mode = true;
        this.output += this.modifier;
      }
    };
  
    return unit;
  };
};
