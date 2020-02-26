<?php
/*  Файлы phpmailer */
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
/*  Переменные, которые отправляет пользователь */
/*  из js кода вот из этой строки  data: { 'name': name, 'email': email, 'msg': msg }, */
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['msg'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'jon2211vy@gmail.com'; // Логин на почте
    $mail->Password   = 'zuqgij8d35as'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('jon2211vy@gmail.com', 'От ' .$name ); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('jon_vy@mail.ru');  
    // Прикрипление файлов к письму

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Сообщение с сайта портфолио';
        $mail->Body    = "<b>Почта:</b> $email<br><br>
        <b>Сообщение:</b><br>$text";
// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
 ?>