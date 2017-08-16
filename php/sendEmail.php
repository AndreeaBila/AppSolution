<?php
    //script needed to send an email from the user
    //get the user information from the client
    if(!(isset($_POST['userEmail']) && isset($_POST['userSubject']) && isset($_POST['userMessage']))){
      header("Location: ./home");
      die();
    }
    $userEmail = strip_tags($_POST['userEmail']);
    $userSubject = strip_tags($_POST['userSubject']);
    $userMessage = strip_tags($_POST['userMessage']);
    $userHeader = "From: $userEmail";
    //confirmation data
    $confirmation = array(
      "email" => $userEmail,
      "subject" => "Email Confirmation",
      "message" => "Hello,\n\nYour message has been successfully emailed to the AppSolution Team. We would like to thank you for contacting us and we assure you that one of our team members will reach out to you as soon as possible. We are looking forward to collaborating with you!\n\nBest regards,\nThe AppSolution Team!",
      "header" => "From: office@appsolution.online"
    );
    //compose the message with the user text and his email address
    $finalMessage = "User email address: $userEmail"."\n\nUser Message:\n".$userMessage;
    //send email to office@appsolution.online
    mail("office@appsolution.online", $userSubject, $finalMessage, $userHeader) or die("Unexpected Error");
    //sleep for 5 seconds and then send email confirmation to the user
    sleep(1);
    mail($confirmation['email'], $confirmation['subject'], $confirmation['message'], $confirmation['header']) or die("Unexpected Error");
?>
<!-- Loading page that will appear when the email in being sent -->
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <title>App Solution - Loading</title>

    <!--Bootstrap-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- FontAwesome -->
    <script src="https://use.fontawesome.com/8dd7dadaef.js"></script>

    <!--Google Fonts for this project-->
    <link href="https://fonts.googleapis.com/css?family=Raleway:300|Roboto:300" rel="stylesheet">

    <!-- My CSS -->
    <link rel="stylesheet" type="text/css" href="../css/main.css">
    <!--media="screen, handheld">-->
    <!--<link rel="stylesheet" type="text/css" href="enhanced.css" media="screen  and (min-width: 40.5em)" /> -->

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Icon -->
     <link rel="shortcut icon" href="../img/appsol.png"> 

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!-- [if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif] -->        
  </head>
  <body>

    <div class="loader text-center">
        <img src="../img/appsol2.png" alt="Loading...">      
      <h5>Please wait while your message is being sent</h5>
      <h6>Check your email for confirmation (This may take a few minutes)</h6>
    </div>
      
   <script>
    redirect();
        
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function redirect() {
      await sleep(5000);
      location.href = "home";
    }
   </script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <!-- The js script for this file -->
    <!-- <script src="../js/home.js"></script> -->
  </body>
</html>