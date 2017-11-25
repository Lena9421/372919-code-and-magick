'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');
// Исходные данные
var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

//Функция выбирающая случайный элемент из массива
var getRandomNumber = function(arr) {
  return Math.floor(Math.random() * (arr.length));
};
//Функция генерирующая набор свойств мага
var generateWizard = function () {
  return {
    name: getRandomNumber(wizardName) + getRandomNumber(wizardSurname),
    coatColor: getRandomNumber(coatColors),
    eye: getRandomNumber(eyesColors)
  };
};
