'use strict';


let sum = (function (a, b) {

  let firstNum = a;
  let secondNum = b;

  function add() {
    return firstNum + secondNum;
  }

  return add;

})(10,12);



module.exports = {
  sum
};
