'use strict';
(function () {
  var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  var commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
  var elementsBigPicture = document.querySelector('.big-picture');
  elementsBigPicture.classList.remove('hidden');
  var photosData = window.data.createArray(25);

  // createTemplate - функция создает DOM-элемент
  var createTemplate = function (template) {
    return template.cloneNode(true);
  };

  // fillSimilarPhoto - функция создает DOM-элемент
  var fillSimilarPhoto = function (data) {
    var fragment = document.createDocumentFragment();
    var element = document.querySelector('.pictures');
    for (var i = 0; i < data.length; i++) {
      var pictureElement = createTemplate(pictureTemplate);
      pictureElement.querySelector('.picture__img').src = data[i].url;
      pictureElement.querySelector('.picture__comments').textContent = data[i].comments;
      pictureElement.querySelector('.picture__likes').textContent = data[i].likes;
      fragment.appendChild(pictureElement);
    }
    element.appendChild(fragment);
  };

  fillSimilarPhoto(photosData);

  var fillSocialComments = function (data) {
    var fragment = document.createDocumentFragment();
    var element = document.querySelector('.social__comments');
    for (var i = 0; i < data.length; i++) {
      var commentElement = createTemplate(commentTemplate);
      commentElement.querySelector('.social__picture').src = data[i].avatar;
      commentElement.querySelector('.social__picture').alt = data[i].name;
      commentElement.querySelector('.social__text').textContent = data[i].message;
      fragment.appendChild(commentElement);
    }
    element.appendChild(fragment);
  };
  var fillBigPicture = function (data) {
    elementsBigPicture.querySelector('img').src = data[1].url;
    elementsBigPicture.querySelector('.likes-count').textContent = data[0].likes;
    elementsBigPicture.querySelector('.comments-count').textContent = data[0].comments.length;
    var comments = data[0].comments;
    fillSocialComments(comments);
    elementsBigPicture.querySelector('.social__caption').textContent = data[0].description;
  };
  fillBigPicture(photosData);

  document.querySelector('.big-picture .social__comment-count').classList.add('visually-hidden');
  document.querySelector('.big-picture .comments-loader').classList.add('visually-hidden');
})();
