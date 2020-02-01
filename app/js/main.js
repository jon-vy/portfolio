
 

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

 window.onload = function() {
    
    window.setTimeout(function () {
document.getElementById('container').style.display = 'block';
document.getElementById('preload').style.display = 'none';

/* Функция для перещёта размера пентакля */
function pentacle() {
  var width_Blok_Left = document.getElementById('blok-left').offsetWidth;/*получить ширину левого блока */
  var width_img_pentacle = document.getElementById('container-pentacle').offsetWidth;/* получить ширину блока с пентаклями */
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
  var delay = 1000; /*чтобы сильно не грузить браузер обработчик срабатывает с задержкой 1000мс после ресайза окна */
 
   return function () {
    
    if (timer) { 
      clearTimeout(timer); 
    }
    timer = setTimeout(function () {
      if (container_pentacle.offsetWidth != container_pentacle.widthBefor) {
        pentacle();
        billboardF();
      }
      container_pentacle.widthBefor = container_pentacle.offsetWidth;
    }, delay);
  };
})();
container_pentacle.widthBefor = container_pentacle.offsetWidth;  /* запоминает исходную ширину блока */
window.onresize = handler;   /*срабатывает при ресайзе окна браузера */





/* кнопки с billboard */
var point  = document.getElementsByClassName('point');
var point1  = document.getElementById('point-1');
var point2  = document.getElementById('point-2');
var point3  = document.getElementById('point-3');
var point4  = document.getElementById('point-4');
var containerBillboard = document.getElementById('container-billboard');
var billboard = document.getElementById('billboard');

containerBillboard.onmouseleave  = function () {
  billboard.style.animation = 'slider 10s linear infinite both';
   for( let i = 0; i < point.length; i++){ /*проходим циклом по всем элементам массивоподобного объекта */
    point[i].style.background = 'none';  /*удаляю background у кнопок */
  }
}
  
point1.onclick  = function () {
  billboard.style.animation = 'slider-1 0.5s linear both';
  this.style.background = 'blue';
  point4.style.background = 'none';
  point2.style.background = 'none';
  point3.style.background = 'none';
}
point2.onclick  = function () {
  billboard.style.animation = 'slider-2 0.5s linear both';
  this.style.background = 'blue';
  point1.style.background = 'none';
  point3.style.background = 'none';
  point4.style.background = 'none';
}
point3.onclick  = function () {
  billboard.style.animation = 'slider-3 0.5s linear both';
  this.style.background = 'blue';
  point1.style.background = 'none';
  point2.style.background = 'none';
  point4.style.background = 'none';
}
point4.onclick  = function () {
  billboard.style.animation = 'slider-4 0.5s linear both';
  this.style.background = 'blue';
  point1.style.background = 'none';
  point3.style.background = 'none';
  point2.style.background = 'none';
}
  


/* -----billboard--------- */
function billboardF() {
  var heightItem = document.getElementById('item-1').offsetHeight;
  var distance1 = heightItem * 49 / 100;
  document.getElementById('item-1').style.transform = 'translateZ(' + distance1 + 'px )';
  document.getElementById('item-2').style.transform = 'rotateX(90deg)' + 'translateZ(' + distance1 + 'px )';
  document.getElementById('item-3').style.transform = 'rotateX(180deg)' + 'translateZ(' + distance1 + 'px )';
  document.getElementById('item-4').style.transform = 'rotateX(270deg)' + 'translateZ(' + distance1 + 'px )';
  console.log('высота billboard ' + billboard.offsetHeight);
  console.log('translateZ ' + distance1);
}
billboardF();
    }, 2000);
  }