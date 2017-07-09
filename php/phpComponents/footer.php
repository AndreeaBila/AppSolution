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
    <form id="contactForm" action="sendEmail.php" method="POST" onsubmit="return authenticate();" class="text-center">
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
      <input type="submit" id="submitMessage" value="Submit" class="g-recaptcha btn" data-sitekey="6LcrZSgUAAAAAD47R-nRYGDQJoPW1al2ZNDwaDBj" data-callback="YourOnSubmitFn">
    </form>
  </div>

  <div class="col-md-4 callSide text-center">
    <h3>Give us a call</h3>  
    <p><a class="callBtn btn btn-success" href="tel:+40727401404"><i class="fa fa-phone fa-lg" aria-hidden="true"></i> Call</a>+40 (727) 401 404</p>
    <p><a class="callBtn btn btn-success" href="tel:+40733207003"><i class="fa fa-phone fa-lg" aria-hidden="true"></i> Call</a>+40 (733) 207 003</p>
    <p><a class="callBtn btn btn-success" href="tel:+40721236256"><i class="fa fa-phone fa-lg" aria-hidden="true"></i> Call</a>+40 (721) 236 256</p>
  </div>

  <hr>
  <div class="copyright">
    <p class="pull-left">Copyright &copy; AppSolutions &trade; Team 
    <p class="pull-right">AppSolutions 2017 |All Rights Reserved</p>
  </div>
</footer>