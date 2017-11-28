'use strict';

// покажем блок настроек
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
// Исходные данные
var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// Функция выбирающая случайный элемент из массива (формула)
var getRandomNumber = function () {
  return Math.floor(Math.random() * (arr.length));
};

// Функция генерирующая набор свойств мага
var generateWizard = function () {
  return {
    name: WIZARD_NAME[getRandomNumber(WIZARD_NAME)] + ' ' + WIZARD_SURNAME[getRandomNumber(WIZARD_SURNAME)],
    coatColor: COAT_COLOR[getRandomNumber(COAT_COLOR)],
    eyesColor: EYES_COLOR[getRandomNumber(EYES_COLOR)]
  };
};

// создадим цикл, который  добавляет объекты(магов с их рандомными свойствами) в массив(allWizards);
// обернем массив и цикл в функцию, которая будет возвращать нам массив объектов (магов);
var getAllWizards = function () {
  var allWizards = [];
  var WIZARD_AMOUNT = 4;
  for (var i = 0; i < WIZARD_AMOUNT; i++) {
    allWizards.push(generateWizard());
  }
  return allWizards;
};

// создадим переменную которая содержит в себе все значения функции  getAllWizards
var wizards = getAllWizards();

// клонируем переменную similarWizardTemplate, которая представляет собой некий .content и помещаем ее в wizardElement
// запишем все в цикл, который пройдет по массиву wizards и передаст значения
// обернем все в функцию renderWizard которая вернет нам готовый шаблон
var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  return wizardElement;
};
// создадим цикл, который отрисовывает сразу 4 мага
// обернем его в функцию
// var addAllWizards = function () {
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
// return similarListElement.appendChild(fragment);
// };
// addAllWizards();
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');

// массив[0] = элемент;
// массив.push(элемент);
// console.log(());
