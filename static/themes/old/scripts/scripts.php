<?php
$jquery_pages = array('Services | Walker Technologies, Inc.','Walker Technologies, Inc.');

 ?>

<?php if (in_array($page_title, $jquery_pages)): ?>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js" type="text/javascript"></script>
<?php endif; ?>

<?php if ($page_title == 'Walker Technologies, Inc.'): ?>
 <script src="/scripts/jquery.easing.min.js"></script>
 <script src="/scripts/slides.min.jquery.js"></script>
 <script>
function setObjects(){
  slides_control = $('.slides_control');
  blocks = $('.slides_control div');
  images = $('.slides_control img');
}

 function setHeight(){
    height = ($(this).width() - (16 * 2) - (10 * 2) ) * 270 / 570;
    $(blocks).height(height);
    $(slides_control).height(height);
    $(images).height(height);
    }

 $(document).ready(
    function(){
       $('#slides').slides({
        preload: true,
        play: 5000,
        generatePagination: false,
        preloadImage: 'images/slideshow/loader.gif'

       });

      setObjects();
      setHeight();

  $(window).resize(function(){

    setHeight();
  });

  });
 </script>
<?php endif; ?>

<?php if($page_title == 'Services | Walker Technologies, Inc.'): ?>
<script type="text/javascript">
 $(document).ready(function(){

  var servicesSections = $("[id^='service-section-']");
  servicesSections.not("[id='service-section-description']").hide();

  var services = $("[name^='service-section-']");


services.click(function(){
 services.removeClass('active-link');
 $(this).addClass('active-link');
 servicesSections.hide();
 $('#' + $(this).attr('name')).fadeIn();
});

 });
</script>
<?php endif; ?>

<script src="/scripts/konamicode.js"></script>