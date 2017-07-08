<!--Footer document to be included in all pages-->
<footer class="footerStyle">
  <div class="text-center">
    <h3>Contact us</h3>
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
      <input type="submit" id="submitMessage" value="Submit" class="g-recaptcha" data-sitekey="6LcrZSgUAAAAAD47R-nRYGDQJoPW1al2ZNDwaDBj" data-callback="YourOnSubmitFn">
    </form>
  </div>
  
</footer>