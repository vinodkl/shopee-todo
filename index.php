<?php
  header('Access-Control-Allow-Origin: *');
?>
<!DOCTYPE html> 
<html lang="en"> 
  <head> 
    <meta charset="utf-8"> 
    <title>Shopbone</title> 
    <meta name="description" content=""> 
    <meta name="author" content=""> 

    <link rel="stylesheet" href="css/bootstrap.css" type="text/css" media="screen" /> 

    <script src="js/vendor/jquery-1.7.2.min.js"></script> 
    <script src="js/vendor/underscore.min.js"></script> 
    <script src="js/vendor/bootstrap.min.js"></script> 
    <script src="js/vendor/backbone.min.js"></script> 

    <script src="js/models/category.js"></script>

    
    <!-- models: -->

    <!-- views: -->

  </head> 
 
  <body>
	<div class="navbar navbar-fixed-top"> 
      <div class="navbar-inner">
      <div class="offset1"> <a class="brand" href="#">Shopbone</a></div>
	    <div class="container"> 
	      <ul class="nav"> 
	        <li class="home active"><a class="active" href="#">Home</a></li> 
        </ul>
      </div>  
	  </div> 
	</div>
	<div class="container ">
        <section class="row span6" style="margin-top: 40px;">
            <div id="app"></div>
        </section>
    </div>
  </body> 
</html