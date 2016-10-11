'use strict';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function Basketball(color, make) {
  this.color = color;
  this.make = make;
  this.describe = function() {
    return 'it is a ' + color + ' ' + make;
  };
}

module.exports = {
  shuffle: shuffle,
  Basketball: Basketball,
};
