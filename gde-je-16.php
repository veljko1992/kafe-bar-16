
<?php
$body_id="gde-je-16";

 ?>



 <?php include "header.php"; ?>





<div class="container intro-contact">
  <h2>Gde je 16?</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ullam minus excepturi tempora consequuntur error?</p>
<div class="contact-span">
  <div class="hide-number">
<p><i class="fas fa-phone"></i></p>
<p class="number" >064/555/<span> Klikni da vidiš broj.</span></p>
</div>
<div class="hide-number">
<p><i class="fas fa-location-arrow"></i></p>
<p>Gospodara Jovanova 46<span></span></p>
</div>
  <div class="hide-number">
<p><i class="fas fa-envelope"></i></p>
<p class="mail">office@<span> Klikni da vidiš email.</span></p>
</div>
</div>


</div>

    <div style="width: 100%; height:400px;"><iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Gospodar%20Jovanova%2046+(Kafe%20bar%2016)&ie=UTF8&t=&z=15&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.mapsdirections.info/en/custom-google-maps/">Create a custom Google Map</a> by <a href="https://www.mapsdirections.info/en/">Measure area on map</a></iframe></div>

    <div class="contact-form">
      <div class="container">
        <div class="row">
          <div class="col-10  col-md-8 col-lg-6 mr-auto ml-auto">
      <form id="cont-form" >
  <div class="form-group ">
    <label for="SenderName">Ime</label>
    <input name="SenderName" type="text" class="form-control" id="SenderName"  placeholder="Ime" required>

  </div>
  <div class="form-group ">
    <label  for="SenderEmail">Email</label>
    <input name="SenderEmail" type="email" class="form-control" id="SenderEmail" placeholder="Email" required>
  </div>
  <div class="form-group ">
    <label for="SenderMessage">Poruka</label>
    <textarea name="SenderMessage" class="form-control" id="SenderMessage" rows="3" required></textarea>
  </div>
  <button type="submit" class="btn btn-form">Pošalji</button>
</form>
</div>
</div>
</div>
    </div>





 <?php include "footer.php"; ?>
