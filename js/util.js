'use strict';
(function () {
  // getRandomNumber - функция возвращает случайное числа в диапазоне от minNum до maxNum
  var getRandomNumber = function (minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  };
  window.util = {
    getRandomNumber: getRandomNumber
  };
})();
