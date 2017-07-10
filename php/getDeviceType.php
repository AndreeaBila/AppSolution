<?php
  //code needed to check the type of device that the user is using
  //create device class to export as json
  class Device{
    public $type;
    public function __construct($type){
      $this->type =$type;
    }
  }
  //import the file needed to instatitate the required class
  require_once './phpComponents/Mobile_Detect.php';
  $detect = new Mobile_Detect;
  if($detect->isMobile() || $detect->isTablet()){
    $device = new Device('mobile');
    echo json_encode($device);
  }else{
    $device = new Device('PC');
    echo json_encode($device);
  }
?>