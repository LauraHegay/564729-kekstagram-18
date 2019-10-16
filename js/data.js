'use strict';
(function () {
  // createRundomObject функция возвращает случайный объект
  var createRundomObject = function (photoId) {
    var COMMENT_TEMPLATE = [
      'Всё отлично!',
      'В целом всё неплохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
    ];
    var DESCRIPTION_TEMPLATE = [
      'Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill',
      '#fun #party #cool #young',
      'Отдыхаем... #chill #relax #group #photo',
      'Will you still love me when I\'m no longer young and beautiful? (c) Ленин',
      'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy',
      'Если чётко сформулировать желание для Вселенной, то всё обязательно сбудется. Верьте в себя. Главное хотеть и мечтать..... / I\'ve bought some potatoes.'
    ];
    var NAME_TEMPLATE = ['Маша', 'Петя', 'Коля', 'Даша', 'Саша'];
    var data = {
      url: 'photos/' + photoId + '.jpg',
      likes: window.util.getRandomNumber(15, 200),
      comments: [
        {avatar: 'img/avatar-' + window.util.getRandomNumber(1, 6) + '.svg',
          message: COMMENT_TEMPLATE[window.util.getRandomNumber(0, 5)],
          name: NAME_TEMPLATE[window.util.getRandomNumber(0, 4)]
        },
        {avatar: 'img/avatar-' + window.util.getRandomNumber(1, 6) + '.svg',
          message: COMMENT_TEMPLATE[window.util.getRandomNumber(0, 5)],
          name: NAME_TEMPLATE[window.util.getRandomNumber(0, 4)]
        },
        {avatar: 'img/avatar-' + window.util.getRandomNumber(1, 6) + '.svg',
          message: COMMENT_TEMPLATE[window.util.getRandomNumber(0, 5)],
          name: NAME_TEMPLATE[window.util.getRandomNumber(0, 4)]}],
      description: DESCRIPTION_TEMPLATE[window.util.getRandomNumber(0, 5)]
    };
    return data;
  };

  // cоздает массив из N элементов
  var createArray = function (quantityElemets) {
    var elements = [];
    for (var i = 0; i < quantityElemets; i++) {
      elements[i] = createRundomObject(i + 1);
    }
    return elements;
  };
  window.data = {
    createArray: createArray
  };
})();
