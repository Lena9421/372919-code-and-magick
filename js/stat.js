window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.fillRect(100, 10, 420, 270);
  ctx.closePath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.fillRect(110, 280, 420, 10);
  ctx.closePath();
  ctx.beginPath();
  ctx.fillRect(520, 20, 10, 260);
  ctx.closePath();
  ctx.fillStyle = '#000';
  ctx.strokeStyle = '#000';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'bottom';
  ctx.fillText('Ура вы победили!', 150, 40);
  ctx.fillText('Список результатов:', 150, 60);
  var indent = 50;
  var initialX = 160;
  var initialY = 240;
  var histogramWidth = 40;
  var histogramHeight = 150;
  var lineHeight = 25;
  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  // шаг изменения столбика диаграммы
  var step = histogramHeight / max;
  var getRandomColor = function (min, max) {
    return Math.random() * (max - min) + min;
  };
  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = ('rgba(255, 0, 0, 1)');
    } else {
      ctx.fillStyle = 'rgba(52, 24, 227,' + Math.random() + ')';
    }
    ctx.fillRect(initialX + (histogramWidth + indent) * i, initialY, histogramWidth, times[i] * -step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + (histogramWidth + indent) * i, initialY + lineHeight);
    ctx.fillText(times[i].toFixed(0), initialX + (histogramWidth + indent) * i, initialY - times[i] * step - lineHeight*0.2 );
  }

};
// Под облаком должна располагаться тень: многоугольник
// такой же формы, залитый цветом rgba(0, 0, 0, 0.7)
// (полупрозрачный чёрный), смещённый относительно белого
// на 10px вниз и вправо.
