<?php
header("Content-Type: text/html; charset=utf-8");
// Получим данные с элементов формы
$tel = $_POST['tel'];
// обрабатываем полученные данные 
// $tel = htmlspecialchars($tel); //преобразование символов в сущности (мнемоники)
// $tel = urldecode($tel); // декодирование URL
// $tel = trim($tel); //удаление пробельных символов с обеих сторон 

if (!empty($tel)) {
    // Отправка данных на почту
    mail(
        "Alley-Window@yandex.ru",
        "Новое письмо с сайта",
        "Телефон: " . $tel . "\n" .
            "From: no-reply@mydomain.ru \r\n"
    );
    echo json_encode(["message" => "Успешно: Номер телефона был отправлен"]);
} else {
    echo json_encode(["error" => "Ошибка: Поле телефона пустое"]);
    error_log("Телефон: " . $tel);
}
