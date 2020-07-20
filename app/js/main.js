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


window.onload = function () { /* отображение сайта после полной его загрузки */
  window.setTimeout(function () {
    document.getElementById('container').style.opacity = '1';
    document.getElementById('preload').style.display = 'none';

    /* Функция для перещёта размера пентакля */
    function pentacle() {
      var width_Blok_Left = document.getElementById('blok-left').offsetWidth; /*получить ширину левого блока */
      var width_img_pentacle = document.getElementById('container-pentacle').offsetWidth; /* получить ширину блока с пентаклями */
      var distance = width_img_pentacle / 2; /* расстояние между пентаклями */
      var left_img_pentacle = (width_Blok_Left - width_img_pentacle) / 2; /* высчитываю сдвиг вправо */
      document.getElementById('container-pentacle').style.bottom = width_img_pentacle + 'px'; /* сдвигаю в верх блок с пентаклями */
      document.getElementById('container-pentacle').style.left = left_img_pentacle + 'px'; /* сдвигаю вправо блок с пентаклями */
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
    container_pentacle.widthBefor = container_pentacle.offsetWidth; /* запоминает исходную ширину блока */
    window.onresize = handler; /*срабатывает при ресайзе окна браузера */





    /* кнопки с billboard */
    var point = document.getElementsByClassName('point');
    var point1 = document.getElementById('point-1');
    var point2 = document.getElementById('point-2');
    var point3 = document.getElementById('point-3');
    var point4 = document.getElementById('point-4');
    var containerBillboard = document.getElementById('container-billboard');
    var billboard = document.getElementById('billboard');

    containerBillboard.onmouseleave = function () {
      billboard.style.animation = 'slider 10s linear infinite both';
      for (let i = 0; i < point.length; i++) { /*проходим циклом по всем элементам массивоподобного объекта */
        point[i].style.background = 'none'; /*удаляю background у кнопок */
      }
    }

    point1.onclick = function () {
      billboard.style.animation = 'slider-1 0.5s linear both';
      this.style.background = 'blue';
      point4.style.background = 'none';
      point2.style.background = 'none';
      point3.style.background = 'none';
    }
    point2.onclick = function () {
      billboard.style.animation = 'slider-2 0.5s linear both';
      this.style.background = 'blue';
      point1.style.background = 'none';
      point3.style.background = 'none';
      point4.style.background = 'none';
    }
    point3.onclick = function () {
      billboard.style.animation = 'slider-3 0.5s linear both';
      this.style.background = 'blue';
      point1.style.background = 'none';
      point2.style.background = 'none';
      point4.style.background = 'none';
    }
    point4.onclick = function () {
      billboard.style.animation = 'slider-4 0.5s linear both';
      this.style.background = 'blue';
      point1.style.background = 'none';
      point3.style.background = 'none';
      point2.style.background = 'none';
    }


    var heightBlokLeft = document.getElementById('blok-left').offsetHeight;
    document.getElementById('blok-right').style.height = heightBlokLeft + 'px';
    /* console.log(heightBlokLeft); */
    /* -----billboard--------- */
    function billboardF() {
      var heightItem = document.getElementById('item-1').offsetHeight;
      /* console.log(heightItem); */
      var distance1 = heightItem * 49 / 100;
      document.getElementById('item-1').style.transform = 'translateZ(' + distance1 + 'px )';
      document.getElementById('item-2').style.transform = 'rotateX(90deg)' + 'translateZ(' + distance1 + 'px )';
      document.getElementById('item-3').style.transform = 'rotateX(180deg)' + 'translateZ(' + distance1 + 'px )';
      document.getElementById('item-4').style.transform = 'rotateX(270deg)' + 'translateZ(' + distance1 + 'px )';
      /* console.log('высота billboard ' + billboard.offsetHeight);
      console.log('translateZ ' + distance1); */
    }
    billboardF();



    /* мои работы */
    document.getElementById('layout').style.display = 'flex';
    document.getElementById('sub-title__layout').classList.add('sub-title_active');

    document.getElementById('sub-title__layout').onclick = function () {
      document.getElementById('layout').style.display = 'flex';
      document.getElementById('other').style.display = 'none';
      document.getElementById('sub-title__layout').classList.add('sub-title_active');
      document.getElementById('sub-title__other').classList.remove('sub-title_active');
    }
    document.getElementById('sub-title__other').onclick = function () {
      document.getElementById('other').style.display = 'flex';
      document.getElementById('layout').style.display = 'none';
      document.getElementById('sub-title__other').classList.add('sub-title_active');
      document.getElementById('sub-title__layout').classList.remove('sub-title_active');
    }
    /* мои работы */

    /* плавный переход по якорям */
    $("body").on('click', '[href*="#"]', function (e) {
      var fixed_offset = 20;
      $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
      e.preventDefault();
    });
    /*плавный переход по якорям */






    /* форма обратной связи */
    document.getElementById('contacts').onclick = function () {
      document.getElementById('feedback').style.top = 20 + 'px'; /* появись */
    }
    document.getElementById('feedback__close').onclick = function () {
      document.getElementById('feedback').style.top = -500 + 'px'; /* отъявись */
    }


    /* Отправка почты */

    $("#send").on("click", function () { /* у элемента с #send вызываю событие click*/
      /* получаю содержимое полей .val() с такими id. .trim() удаляет лишние пробелы */
      var name = $("#user_name").val().trim();
      var email = $("#user_email").val().trim();
      var msg = $("#user_msg").val().trim();

      /* проверка на наличе пустых полей */
      if (name == "") {
        $("#error").text("Введите имя");
        return false; /* Если name пустая, то прерывается выполнение функции */
      } else if (email == "") {
        $("#error").text("Введите email");
        return false; /* Если email пустая, то прерывается выполнение функции */
      } else if (msg.length < 5) { /* если сообщение меньше 5 символов */
        $("#error").text("Слишком короткое сообщение");
        return false; /* Если msg пустая, то прерывается выполнение функции */
      }

      $("#error").text(""); /* если всё норм, то очистить блок с текстом ошибки */

      $.ajax({ /* так подключается ajax*/
        url: '../php/send.php', /* обработчик почты */
        type: 'POST', /* тип передачи данных */
        cache: false, /* кеширование отключено */

        data: { 'name': name, 'email': email, 'msg': msg }, /* какие данные передаём */
         /* вот от сюда взято
         var name = $("#user_name").val().trim();
            var email = $("#user_email").val().trim();
            var msg = $("#user_msg").val().trim(); */

        dataType: 'html',/* тип передаваемых данных */
        beforeSend: function () { /*время работы параметра - сразу после нажатия на кнопку отправить и до того как получу результат работы send.php  */
          $("#send").prop("disabled", true); /* на время работы send.php делает кнопку "отправить" не активной */
          $("#send").css("cursor", "default");
          $("#send").text("Отправка");
          
        },
        success: function (data) {      /* выполняется после получения результатов работы send.php */
          /*alert(data);  посмотреть результат работы send.php */
          if (data == 'ok') {
            $("#send").text("Сообщение отправлено");
            
            setTimeout(function () {
              $("#mailForm").trigger("reset");
              $("#send").prop("disabled", false);  /* делаем кнопку отправить снова активной */
              $("#error").text("");
              $("#feedback").css("top", "-500px");
              $("#send").text("Отправить");
              $("#send").css("cursor", "pointer");
              }, 3000);
           
          } else {
            alert(data);
            $("#send").text("Сообщение не отправлено");
            $("#send").css("cursor", "default");
          }
        }
      });
    });

    /* Отправка почты */

    /* форма обратной связи */






    

    /* ----------------Всплывающая кнопка up---------------- */
    window.onscroll = function () {

      var ButtonScrollUp = window.pageYOffset || document.documentElement.scrollTop; /* количество прокрученных пикселей: http://webdiz.com.ua/glava7-sobitie/prokrutka-dokumenta-sobytie-scroll/ */
      var heightBtnUp = screen.height / 2; /* высота окна браузена https://qna.habr.com/q/163903 */
      if (ButtonScrollUp > heightBtnUp) {
        document.getElementById('btn__up').style.display = 'block';
      } else {
        document.getElementById('btn__up').style.display = 'none';
      }
    }
    /* ----------------Всплывающая кнопка up---------------- */

  }, 200); /* задержка отображения сайта после полной его загрузки */
}