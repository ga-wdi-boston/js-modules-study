'use strict';

let double = (function a(number){

let intial = number;

function b() {
  return intial * 2;
}

return b;
});

double();

}

module.exports = {
double
};
