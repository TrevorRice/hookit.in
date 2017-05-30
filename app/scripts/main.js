var Diaporama = require('diaporama');
var container = document.getElementById('diaporama');
var hookLeft = document.querySelector('.js-hook--left');
var hookRight = document.querySelector('.js-hook--right');
var data = require('../diaporama.json');
var props = {
  loop: true,
  autoplay: true,
  width: window.innerWidth,
  height: window.innerHeight
};

var diaporama = Diaporama(container, data, props);

window.addEventListener('resize', function() {
  diaporama.width = window.innerWidth;
  diaporama.height = window.innerHeight;
});

hookLeft.addEventListener('click', function() {
  diaporama.prev();
});

hookRight.addEventListener('click', function() {
  diaporama.next();
});
