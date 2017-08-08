<?php
  session_start();
  class UserID{
    public $id;
    function __construct($id){
      $this->id = $id;
    }
  }
  //script required to get the id of the current transaction
  
    $id = new UserID($_SESSION['id']);
    echo json_encode($id);
  
?>