<!--Footer document to be included in all pages-->
<footer class="footerStyle">
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
      <i class="fa fa-commenting" aria-hidden="true"></i>
      <textarea name="userMessage" id="userMessage" class="form-control" placeholder="Message"></textarea>
    </div>
  </form>
</footer>