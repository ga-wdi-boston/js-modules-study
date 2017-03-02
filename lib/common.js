'use strict';

// code to your heart's content
// your goal is to have something at the end to show for it
// rough goal: an object with a property containing a function
// once you've got it, assign it to `module.exports` at the
// bottom of the file
//
// if you're strapped for ideas, try re-writing cipher or randomizer code

// exporting
// there are two ways to export:

//exports.property = value;

// and

// module.exports = {
//   property1 : value1,
//   property2 : value2
// };

// the former is good for building an object one property at a time
// the latter is good for when you've already got an object or want
// to export just one thing

// here is what NOT to do:
//
// exports = { ... };

// this overwrites `exports` with a new object. fine, right?
//
// well, no. `module.exports` and `exports` are aliases starting out
// but if you do this, `exports` will point to a new object,
// while `module.exports` still points to the old one
//
// you'll lose hours of your life trying to track this bug down!
const randomCardDraw = (function() {
  return function() {
    let rando = Math.floor(Math.random() * 52) + 1;
    let card = ''
    if (rando % 13 === 0) {
      card += "Ace";
    } else if (rando % 13 === 12) {
      card += "Two";
    } else if (rando % 13 === 11) {
      card += "Three";
    } else if (rando % 13 === 10) {
      card += "Four";
    } else if (rando % 13 === 9) {
      card += "Five";
    } else if (rando % 13 === 8) {
      card += "Six";
    } else if (rando % 13 === 7) {
      card += "Seven";
    } else if (rando % 13 === 6) {
      card += "Eight";
    } else if (rando % 13 === 5) {
      card += "Nine";
    } else if (rando % 13 === 4) {
      card += "Ten";
    } else if (rando % 13 === 3) {
      card += "Jack";
    } else if (rando % 13 === 2) {
      card += "Queen";
    } else if (rando % 13 === 1) {
      card += "King";
    }

    if (Math.floor(rando / 4) === 0) {
      card += " of Spades";
    } else if (Math.floor(rando / 4) === 1) {
      card += " of Hearts";
    } else if (Math.floor(rando / 4) === 2) {
      card += " of Clubs";
    } else if (Math.floor(rando / 4) === 3) {
      card += " of Diamonds";
    }

    return card;
  };
})();


module.exports = {
  draw: randomCardDraw
}
