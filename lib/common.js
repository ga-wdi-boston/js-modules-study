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


let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

 let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


let ROT13Cipher = {
  encode: function(str){
    let result = [];
    let arr = str.split('');
    arr.forEach(function(element){
      if (element === " "){
        result.push(" ");
      } else if (element === element.toUpperCase()){
           let letterIndex = upperAlphabet.indexOf(element);
           if (letterIndex < 13){
            result.push(upperAlphabet[letterIndex + 13]);
          } else {
            result.push(upperAlphabet[letterIndex - 13]);
          }
        }
        else{
          let letterIndex = lowerAlphabet.indexOf(element);
          if (letterIndex < 13){
            result.push(lowerAlphabet[letterIndex + 13]);
        } else {
          result.push(lowerAlphabet[letterIndex - 13]);
        }
      }
    });
    result = result.join(" ");
    console.log(result);
  }
};

module.exports = ROT13Cipher;
