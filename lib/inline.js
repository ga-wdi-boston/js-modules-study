'use strict';

let countFromZero = (function (initialValue) {
  let a = initialValue;
  const incrementor = function () {
    return a++;
  };
  return incrementor;
});

// from here, use the module you've created
for (let index = 0; index < 10; index++) {
  let messageToBeLogged = countFromZero();
  console.log(messageToBeLogged);
}
