<!--Main Page that will include all the other smaller sections (header, presentation, portofolio, about, contact, footer-->
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <title>App Solutions</title>

    <!--Bootstrap-->
    <link href="../../Bootstrap2/css/bootstrap.min.css" rel="stylesheet"> 

    <!-- FontAwesome -->
    <link rel="stylesheet" href="../../FontAwesome/css/font-awesome.min.css"> 

    <!--Google Fonts for this project-->
    <link href="https://fonts.googleapis.com/css?family=Raleway:300|Roboto:300" rel="stylesheet">

    <!-- My CSS -->
    <link href="../css/main.css" rel="stylesheet"> 
    <!-- Icon -->
     <link rel="shortcut icon" href="../img/appsol7.png"> 

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!-- [if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif] -->        
  </head>
  <body>

    <div id="wrapper">
      <img src="../img/appsol7.png" alt="no">
      <img src="../img/appsol10.png" alt="no">
      <h1>This is Raleway</h1>
      <p>This is Roboto</p>
      <?php
        include './phpComponents/header.php';
        include './phpComponents/presentation.php';
        include './phpComponents/portofolio.php';
        include './phpComponents/about.php';
        include './phpComponents/contact.php';
        include './phpComponents/footer.php';
      ?>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 

    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="../../Bootstrap/js/bootstrap.min.js"></script> 

    <!-- The js script for this file -->
    <script src="../js/main.js"></script>
  </body>
</html>
