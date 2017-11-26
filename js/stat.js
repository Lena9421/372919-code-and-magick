'use strict';

window.renderStatistics = function (ctx, names, times) {
  var INDENT = 50;
  var INITIAL_X = 160;
  var INITIAL_Y = 240;
  var HISTOGRAM_WIDTH = 40;
  var HISTOGRAM_HEIGHT = 150;
  var LINE_HEIGHT = 25;
  var maxTime = -1;
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 280, 420, 10);
  ctx.fillRect(520, 20, 10, 260);
  ctx.fillStyle = '#000';
  ctx.strokeStyle = '#000';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'bottom';
  ctx.fillText('Ура вы победили!', 150, 40);
  ctx.fillText('Список результатов:', 150, 60);
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }
  var step = HISTOGRAM_HEIGHT / maxTime;
  var getRandomColor = function (min, max) {
    return Math.random() * (max - min) + min;
  };
  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = names[i] === 'Вы' ? ctx.fillStyle = ('rgba(255, 0, 0, 1)') : ctx.fillStyle = 'rgba(0, 0, 255,' + getRandomColor(0.1, 1) + ')';
    ctx.fillRect(INITIAL_X + (HISTOGRAM_WIDTH + INDENT) * i, INITIAL_Y, HISTOGRAM_WIDTH, times[i] * -step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], INITIAL_X + (HISTOGRAM_WIDTH + INDENT) * i, INITIAL_Y + LINE_HEIGHT);
    ctx.fillText(times[i].toFixed(0), INITIAL_X + (HISTOGRAM_WIDTH + INDENT) * i, INITIAL_Y - times[i] * step - LINE_HEIGHT * 0.2);
  }
};
