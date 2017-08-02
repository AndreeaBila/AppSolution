<?php
    //script needed to send an email from the user
    $userEmail = strip_tags($_POST['userEmail']);
    $userSubject = strip_tags($_POST['userSubject']);
    $userMessage = strip_tags($_POST['userMessage']);

    var_dump($userEmail);
    var_dump($userSubject);
    var_dump($userMessage);
?>