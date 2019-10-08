'use strict';
(function () {
  var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  var photosData = window.data.createArray(25);
  // createSimilarPhoto - функция создает DOM-элемент
  var createSimilarPhoto = function (template) {
    return template.cloneNode(true);
  };
  // fillSimilarPhoto - функция создает DOM-элемент
  var fillSimilarPhoto = function (data) {
    var fragment = document.createDocumentFragment();
    var element = document.querySelector('.pictures');
    for (var i = 0; i < data.length; i++) {
      var pictureElement = createSimilarPhoto(pictureTemplate);
      pictureElement.querySelector('.picture__img').src = data[i].url;
      pictureElement.querySelector('.picture__comments').textContent = data[i].comments;
      pictureElement.querySelector('.picture__likes').textContent = data[i].likes;
      fragment.appendChild(pictureElement);
    }
    element.appendChild(fragment);
  };
  fillSimilarPhoto(photosData);
})();
