<!--Footer document to be included in all pages-->
<footer class="footerStyle text-center">
  <header class="footerHeader">
    <h2>Want to get in touch?</h2>
    <p>Do you have questions or wish to collaborate with us?</p>
  </header>

  <div class="col-md-4 socialSide text-center">
    <h3>Find us online</h3>
    <img class="footerLogo" src="../img/appsol.png" alt="AppSolutions">
    <h3 class="noMargin">AppSolutions</h3>
    <ul>
      <li><a href="#"><img src="../img/linkedin.png" alt="Image Unavailable"></a></li>
      <li><a href="#"><img src="../img/pinterest.png" alt="Image Unavailable"></a></li>
      <li><a href="#"><img src="../img/youtube.png" alt="Image Unavailable"></a></li>
    </ul>
  </div>

  <div class="text-center formSide col-md-4">
    <h3>Send us a message</h3>
    <form id="i-recaptcha" action="./phpComponents/sendEmail.php" method="POST" class="text-center">
    <div class="alert alert-danger alert-dismissable" id="captchaAlert">
      <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
      <strong>Error!</strong> Please fill in all the details.
    </div>
      <div class="form-group">
        <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
        <input type="email" name="userEmail" id="userEmail" class="form-control" placeholder="Email">
      </div>
      <div class="form-group">
        <i class="fa fa-tags fa-lg" aria-hidden="true"></i>
        <input type="text" name="userSubject" id="userSubject" class="form-control" placeholder="Subject">
      </div>
      <div class="form-group">
        <textarea name="userMessage" id="userMessage" class="form-control" placeholder="Message"></textarea>
      </div>
      <button class="g-recaptcha" data-sitekey="6LeEcCsUAAAAAF8LXnsLZ11IFjliQdJA_wQH2zfi" data-callback="onSubmit" data-size ="invisible">
        Submit
      </button>
    </form>
  </div>

  <div class="col-md-4 callSide text-center">
    <h3>Give us a call</h3>  
    <p><a class="callBtn btn btn-success" href="tel:+40727401404"><i class="fa fa-phone fa-lg" aria-hidden="true"></i> Call</a>+40 (727) 401 404</p>
    <p><a class="callBtn btn btn-success" href="tel:+40733207003"><i class="fa fa-phone fa-lg" aria-hidden="true"></i> Call</a>+40 (733) 207 003</p>
    <h3>Send an email</h3>
    <p>office@appsolution.online</p>
  </div>

  <hr>
  <div class="copyright">
    <p class="pull-left">Copyright &copy; AppSolution &trade; Team 
    <p class="pull-right">AppSolution 2017 |All Rights Reserved</p>
  </div>
</footer>