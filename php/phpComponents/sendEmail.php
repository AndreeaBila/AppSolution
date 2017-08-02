<?php
    //script needed to send an email from the user
    //get the user information from the client
    $userEmail = strip_tags($_POST['userEmail']);
    $userSubject = strip_tags($_POST['userSubject']);
    $userMessage = strip_tags($_POST['userMessage']);
    $userHeader = "From: $userEmail";
    //confirmation data
    $confirmation = array(
      "email" => $userEmail,
      "subject" => "Email Confirmation",
      "message" => "Hi There,\nWe can confirm your email from AppSolution contact form and would like to inform you that we will respond as soon as possible to your enquiry.\nAlso, please do not reply to this email.\n\nBest regards,\nThe AppSolution Team!",
      "header" => "From: office@appsolution.online"
    );
    //compose the message with the user text and his email address
    $finalMessage = "User email address: $userEmail"."\n\nUser Message:\n".$userMessage;
    //send email to office@appsolution.online
    mail("office@appsolution.online", $userSubject, $finalMessage, $userHeader) or die("Unexpected Error");
    //sleep for 5 seconds and then send email confirmation to the user
    sleep(5);
    mail($confirmation['email'], $confirmation['subject'], $confirmation['message'], $confirmation['header']);
    //return to the main page
    header("Location: ../home");
?>