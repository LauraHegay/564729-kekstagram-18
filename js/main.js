'use strict';
var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
// getRandomNumber - функция возвращает случайное числа в диапазоне от minNum до maxNum
var getRandomNumber = function (minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
};

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
  var NAME_TEMPLATE = ['Маша', 'Петя', 'Коля', 'Даша', 'Саша'];
  var data = {
    url: 'photos/' + photoId + '.jpg',
    description: 'описание фотографии',
    likes: getRandomNumber(15, 200),
    comments: COMMENT_TEMPLATE[getRandomNumber(0, 5)],
    name: NAME_TEMPLATE[getRandomNumber(0, 4)]
  };
  return data;
};

// cоздает массив из N элементов
var createArray = function (quantityElemets) {
  var elements = [];
  for (var i = 0; i < quantityElemets; i++) {
    elements[i] = createRundomObject(i);
  }
  return elements;
};

var photosData = createArray(25);
// createSimilarPhoto - функция создает DOM-элемент
var createSimilarPhoto = function (template) {
  return template.cloneNode(true);
};
// fillSimilarPhoto - функция создает DOM-элемент
var fillSimilarPhoto = function (data) {
  var elements = document.createDocumentFragment();
  var element = document.querySelector('.picture');
  for (var i = 0; i < data.length; i++) {
    var pictureElement = createSimilarPhoto(pictureTemplate);
    pictureElement.querySelector('.picture__img').src = data[i].url;
    pictureElement.querySelector('picture__comments').content = data[i].comments;
    pictureElement.querySelector('picture__likes').content = data[i].likes;
    elements.appendChild(pictureElement);
  }
  element.appendChild(elements);
};
fillSimilarPhoto(photosData);
