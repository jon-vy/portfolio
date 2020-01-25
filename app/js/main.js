(()=>{
  let $ = c.getContext("2d"),
      w = c.width = window.innerWidth,
      h = c.height = window.innerHeight,
      random = n=>Math.random()*n,
      stars = new Array(1000).fill().map(()=>{
        return {r: random(w), s: random(0.01), a: random(Math.PI*2)};
      });

  /* console.log(stars) */
  function loop(){
    $.fillStyle = "rgba(0,0,8,.1)";
    $.fillRect(0,0,w,h);
    stars.forEach(e=>{
      e.a+=e.s;
      $.beginPath();
      $.arc(Math.cos(e.a)*e.r + w/2, Math.sin(e.a)*e.r + h/2, 1,0,Math.PI*2);
      $.closePath();
      $.fillStyle = "white";
      $.fill();
    })

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  window.addEventListener("resize", ()=>{
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
  })
})()

function pentacle(){
var width_Blok_Left = document.getElementById('blok-left').offsetWidth;/* ширина левого блока */

var width_img_pentacle = document.getElementById('container-pentacle').offsetWidth;/* ширина блока с пентаклями */
/* var width_img_pentacle = width_Blok_Left / 100 * 40; */

var distance = width_img_pentacle / 2 ; /* расстояние между пентаклями */

var left_img_pentacle = (width_Blok_Left - width_img_pentacle) / 2;/* высчитываю сдвиг вправо */

document.getElementById('container-pentacle').style.bottom = width_img_pentacle +'px';/* сдвигаю в верх блок с пентаклями */
document.getElementById('container-pentacle').style.left = left_img_pentacle +'px';/* сдвигаю вправо блок с пентаклями */
document.getElementById('front').style.transform  = 'translateZ(' + distance + 'px )';
document.getElementById('back').style.transform  = 'rotateY(180deg)'+'translateZ(' + distance + 'px )';
document.getElementById('right').style.transform  = 'rotateY(90deg)'+'translateZ(' + distance + 'px )';
document.getElementById('left').style.transform  = 'rotateY(-90deg)'+'translateZ(' + distance + 'px )';
document.getElementById('top').style.transform  = 'rotateX(90deg)'+'translateZ(' + distance + 'px )';
document.getElementById('bottom').style.transform  = 'rotateX(-90deg)'+'translateZ(' + distance + 'px )';
document.getElementById('container-pentacle').style.transformOrigin = distance + 'px ' + distance + 'px';
/* console.log('distance ' +  distance); */
}
pentacle();