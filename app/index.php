<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ТехноМагия</title>
    <link href="https://fonts.googleapis.com/css?family=Cormorant+Unicase:300,700|Underdog&display=swap&subset=cyrillic" rel="stylesheet">
    <link rel="stylesheet" href="css/stile.min.css">
</head>

<body>

    <?php include $_SERVER['DOCUMENT_ROOT'] . "/php/preload.php";?>

    <div class="container animated 1 fadeIn delay-0.1s" id="container">

        <header class="header wrap">

            <div class="blok-left wrap-blok" id="blok-left">
                <img src="images/mag.png" alt="" id="height-mag">
                <div class="container-pentacle" id="container-pentacle">
                    <div class="side front" id="front"><img src="images/1.png" alt=""></div>
                    <div class="side back" id="back"><img src="images/2.png" alt=""></div>
                    <div class="side right" id="right"><img src="images/3.png" alt=""></div>
                    <div class="side left" id="left"><img src="images/4.png" alt=""></div>
                    <div class="side top" id="top"><img src="images/5.png" alt=""></div>
                    <div class="side bottom" id="bottom"><img src="images/6.png" alt=""></div>
                </div>

            </div>

            <div class="blok-right wrap-blok" id="blok-right">
                <div class="title" id="up">
                    Вёрстка сайтов
                </div>

                <nav class="menu">
                    <div><a href="php/in-development.php" target="_blank">Блог</a></div>
                    <div><a href="#my-works__title">Мои работы</a></div>
                    <div><a href="php/in-development.php" target="_blank">Цены</a></div>
                    <div><a href="#" id="contacts">Контакты</a></div>
                </nav>

                <div class="container-billboard" id="container-billboard">

                    <div class="billboard" id="billboard">
                        <div class="item item-1" id="item-1"> Вёрстка волшебных лендингов<br> (+100 к продажам)</div>
                        <div class="item item-2" id="item-2"> Вёрстка магических визиток <br> (+80 к известности)</div>
                        <div class="item item-3" id="item-3"> Сайт портфолио <br> (+50 к удаче)</div>
                        <div class="item item-4" id="item-4"> Магия<br>HTML CSS JavaScript php</div>
                    </div>

                    <div class="container-point" id="container-point">
                        <div class="point" id="point-1"></div>
                        <div class="point" id="point-2"></div>
                        <div class="point" id="point-3"></div>
                        <div class="point" id="point-4"></div>
                    </div>
                </div>
            </div>
        </header>



        <section class="wrap__my-works">
            <div class="my-works__title" id="my-works__title">
                Мои работы
            </div>
            <div class="my-works__sub-title">
                <div class="sub-title" id="sub-title__layout">
                    Вёрстка
                </div>
                <div class="sub-title" id="sub-title__other">
                    Прочее
                </div>
            </div>

            <div class="my-works">
                <div class="works animated fadeIn" id="layout">
                    <div class="work">
                        <a href="http://xn-------53ddl0a2abcd3ac1adhg7alojdk0wra.xn--p1acf/surf/index.html" target="_blank">
                            <img src="images/go-surf.png" alt="">
                            <span>Лендинг go-surf</span>
                        </a>
                    </div>
                    <div class="work">
                        <a href="http://xn-------53ddl0a2abcd3ac1adhg7alojdk0wra.xn--p1acf/joomhost/index.html" target="_blank">
                            <img src="images/hosting.png" alt="">
                            <span>THE BEST WEB HOSTING</span>
                        </a>
                    </div>
                    <div class="work">
                        <a href="http://xn-------53ddl0a2abcd3ac1adhg7alojdk0wra.xn--p1acf/dev-portfolio/index.html" target="_blank">
                            <img src="images/3.jpg" alt="">
                            <span>Портфолио Верстальщика</span>
                        </a>
                    </div>
                    <div class="work">
                        <a href="php/in-development.php" target="_blank">
                            <img src="images/4.jpg" alt="">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </a>
                    </div>
                    <div class="work">
                        <a href="php/in-development.php" target="_blank">
                            <img src="images/5.jpg" alt="">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </a>
                    </div>
                </div>

                <div class="works animated fadeIn" id="other">
                    <div class="work">
                        <a href="php/in-development.php" target="_blank">
                            <img src="images/6.jpg" alt="">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </a>
                    </div>
                    <div class="work">
                        <a href="php/in-development.php" target="_blank">
                            <img src="images/7.jpg" alt="">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </a>
                    </div>
                    <div class="work">
                        <a href="php/in-development.php" target="_blank">
                            <img src="images/8.jpg" alt="">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </a>
                    </div>
                    <div class="work">
                        <a href="php/in-development.php" target="_blank">
                            <img src="images/9.jpg" alt="">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </a>
                    </div>
                    <div class="work">
                        <a href="php/in-development.php" target="_blank">
                            <img src="images/10.jpg" alt="">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>







        <div class="feedback" id="feedback">

            <img src="images/close.png" alt="" class="feedback__close" id="feedback__close">


            <form id="mailForm">

                <div class="form-group">
                    <label>Введите ваше имя</label>
                    <input type="text" class="form-control" name="user_name" id="user_name" placeholder="Например, Иван">
                </div>

                <div class="form-group">
                    <label>Введите email</label>
                    <input type="text" class="form-control" name="user_email" id="user_email" placeholder="mail@mail.ru">
                </div>

                <div class="form-group">
                    <label>Сообщение</label>
                    <textarea type="text" class="form-control" name="user_msg" id="user_msg" placeholder="Текст сообщения"></textarea>
                </div>

                <button type="button" class="btn btn-primary" id="send">Отправить</button>

            </form>

            <div id="error"></div>
        </div>

    </div>




    <a id="btn__up" class="btn__up animated infinite heartBeat" href="#up"><span>UP</span></a>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- <script src="js/libs.min.js" defer></script> -->

    <script src="js/main.js" defer></script>
    <!-- <script src="js/1.js" defer></script> -->

</body>

</html>