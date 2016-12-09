'use strict';

const factorial = function (initialValue) {
  let a = initialValue;
  let fact = 1;
  for(let i = 1;i <= a;i++ )
  {
    fact=fact*i;
  }
  return fact;
};


module.exports = {
  factorial,
};
