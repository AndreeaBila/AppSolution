<?php
  session_start();
  //script required to get the id of the current transaction
  if(isset($_SESSION['id'])){
    $id = $_SESSION['id'];
    echo $id;
  }
?>