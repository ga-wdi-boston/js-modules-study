'use strict';

function checkPalindrome(word) {
    return word === word.split('').reverse().join('');
}

module.exports = {
  checkPalindrome,
};
