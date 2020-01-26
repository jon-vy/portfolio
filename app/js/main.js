(() => {
  let $ = c.getContext("2d"),
    w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    random = n => Math.random() * n,
    stars = new Array(1000).fill().map(() => {
      return { r: random(w), s: random(0.01), a: random(Math.PI * 2) };
    });

  /* console.log(stars) */
  function loop() {
    $.fillStyle = "rgba(0,0,8,.1)";
    $.fillRect(0, 0, w, h);
    stars.forEach(e => {
      e.a += e.s;
      $.beginPath();
      $.arc(Math.cos(e.a) * e.r + w / 2, Math.sin(e.a) * e.r + h / 2, 1, 0, Math.PI * 2);
      $.closePath();
      $.fillStyle = "white";
      $.fill();
    })

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  window.addEventListener("resize", () => {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
  })
})()
/* Функция для перещёта размера пентакля */
function pentacle() {
  var width_Blok_Left = document.getElementById('blok-left').offsetWidth;/* ширина левого блока */
  var width_img_pentacle = document.getElementById('container-pentacle').offsetWidth;/* ширина блока с пентаклями */
  var distance = width_img_pentacle / 2; /* расстояние между пентаклями */
  var left_img_pentacle = (width_Blok_Left - width_img_pentacle) / 2;/* высчитываю сдвиг вправо */
  document.getElementById('container-pentacle').style.bottom = width_img_pentacle + 'px';/* сдвигаю в верх блок с пентаклями */
  document.getElementById('container-pentacle').style.left = left_img_pentacle + 'px';/* сдвигаю вправо блок с пентаклями */
  document.getElementById('front').style.transform = 'translateZ(' + distance + 'px )';
  document.getElementById('back').style.transform = 'rotateY(180deg)' + 'translateZ(' + distance + 'px )';
  document.getElementById('right').style.transform = 'rotateY(90deg)' + 'translateZ(' + distance + 'px )';
  document.getElementById('left').style.transform = 'rotateY(-90deg)' + 'translateZ(' + distance + 'px )';
  document.getElementById('top').style.transform = 'rotateX(90deg)' + 'translateZ(' + distance + 'px )';
  document.getElementById('bottom').style.transform = 'rotateX(-90deg)' + 'translateZ(' + distance + 'px )';
  document.getElementById('container-pentacle').style.transformOrigin = distance + 'px ' + distance + 'px';
}
pentacle();
var container_pentacle = document.getElementById('container-pentacle'),
handler = (function () {
  var timer;
  var delay = 1000; /* чтобы сильно не грузить браузер обработчик срабатывает с задержкой 1000мс после ресайза окна */
  return function () {
    if (timer) { 
      clearTimeout(timer); 
    }
    timer = setTimeout(function () {
      if (container_pentacle.offsetWidth != container_pentacle.widthBefor) {
        pentacle();
      }
      container_pentacle.widthBefor = container_pentacle.offsetWidth;
    }, delay);
  };
})();
container_pentacle.widthBefor = container_pentacle.offsetWidth;  /* запоминает исходную ширину блока */
window.onresize = handler;  /* срабатывает при ресайзе окна браузера */

