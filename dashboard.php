<?php
  session_start();
  $firstname = $_SESSION["firstname"];
  $surname = $_SESSION["surname"];

  
?>
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="assets/images/Screenshot-2023-08-29-125908.png" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <title>IIPPS Academy - Download form</title>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    
    <link rel="stylesheet" type="text/css" href="styles.css">
    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="assets/css/fontawesome.css">
    <link rel="stylesheet" href="assets/css/templatemo-grad-school.css">
    <link rel="stylesheet" href="assets/css/owl.css">
    <link rel="stylesheet" href="assets/css/lightbox.css">
    

  </head>
<body>
       <!--header-->
  <header class="main-header clearfix" role="header">
    <div class="logo">
      <a href="index.html" class="abbrevate"><em>IIPPS</em> Academy</a>
    <p class="full-name">Icon International Policy and Professional Security Academy</p>
    </div>
    
    <nav id="menu" class="main-nav" role="navigation">
      <ul class="main-menu">
        <li><a href="index.html" class="external">Home</a></li>
        <!-- <li class="has-submenu"><a href="#section2">About Us</a>
          <ul class="sub-menu">
            <li><a href="#section2">Who we are?</a></li>
            <li><a href="#section3">What we do?</a></li>
            <li><a href="#section3">How it works?</a></li>
            <li><a href="https://templatemo.com/about" rel="sponsored" class="external">External URL</a></li>
          </ul>
        </li> -->
        <li><a href="application.html" class="external">Payment</a></li>
        <li><a href="login-page.php" class="external">Login</a></li>
        <!-- <li><a href="#section5">Video</a></li> -->
        <li><a href="contact.html" class="external">Contact</a></li>
      </ul>
    </nav>
  </header>
        
    <div class="container" id="container">
        <div class="row">
            <div class="col-12" id="formPay">
              <center>
                  <h2 class='header'>Student Dashboard </h2>
              </center>
              <h5>Welcome <b><?php echo $firstname." ".$surname;  ?></b> </h5>
              <br>
            </div>
            <div class="col-12 col-lg-6" id="reg-number">
                  <h6 class="alert alert-success">Your Registration number is: <b>IIPPSA/01/23/00<?php echo $_SESSION["id"];   ?></b></h6>
                
                <br>
                <h3 class="instruction">Set of instructions</h3>
                <ol>
                    <li>Please click on button to download file.</li>
                    <li>Fill the form manually and send to this email: <b><a href="mailto:iippsa23@gmail.com">iippsa23@gmail.com</a> or contact: <a href="tel:07062094716">07062094716</a></b></li>    
                </ol>
                <br>
                <a class="form" href="./assets/images/ICONINTERNATIONAL.pdf" download=""><button class="btn btn-success">Download File <i class="fas fa-download"></i></button></a>    
              <br> 
              <br>
                
            </div>
            <div class="col-12 col-lg-6" id="reg-number">
                <h3 class="alert alert-info">Pay your tuition fee Here</h3>   
                <form method="GET"  id="paymentForm">
                <label for="full-name"><b>Full Name:</b></label>
                <input type="text"  
                title="Insert your full name" class="form-control" id="full-name" 
                autocomplete="on"  placeholder="Full name of Student" name="fullname"  required aria-required="true">
                <br>
                <label for="email-address"><b>Email:</b></label>
                <input type="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Insert a valid email" class="form-control" id="email-address" 
                autocomplete="on"  placeholder="e.g example123@gmail.com" name="email"  required aria-required="true">
                <br>
                <label for="phone-number" class="form-label"><b>Phone Number</b></label>
                <p><input type="tel"  class="form-control" name="phonenumber" id="phonenumber" autocomplete="on" placeholder="Example: 08012345678"
                  title="Phone Number must be a number" pattern="[0-9]{11}"   class="form-control" required></p>
                <br>
                <h5 class="alert alert-info"><b>Terms</b></h5>
              
              <ol>
                <li>Please do not refresh the page after payment, wait to be redirected to an application page.</li>
                <li>The application fee is unrefundable. <span class="badge bg-danger">Important</span></li>
                <li>You will be prompted to give your personal details in the next page.</li>
                <li>The application fee cannot be edited during payment.</li>
              </ol>
              
              <label for="amount"><b>Application Fee</b></label>
              <input  type="text" disabled class="form-control" id="amount" name="amount"  value="150000" placeholder="150000 Naira only" aria-required="true">
              <br>
              <div class="form-check">
                
                <input class="form-check-input"  required type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Accept <a href="#" >Terms and Conditions</a>
                </label>
                <br>
                <br>
                
              </div>
                <button onclick="payWithPaystack()" type="submit" class="btn btn-success" style="background-color: #172239; border-radius: 0px; border-color: #172239;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i class="fas fa-money-bill-wave"></i> Proceed to Payment
              </button>
                </form>             
                <br>
                
                
            </div>
        </div>
    </div>            
           

    
     

  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p><i class="fa fa-copyright"></i> Copyright 2023 By <a href="https://iippsa.com.ng" rel="sponsored" target="_parent">IIPPS ACADEMY</a></p>
        </div>
      </div>
    </div>
  </footer>
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="https://js.paystack.co/v1/inline.js"></script> 
  <script src="assets/js/isotope.min.js"></script>
  <script src="assets/js/owl-carousel.js"></script>
  <script src="assets/js/lightbox.js"></script>
  <script src="assets/js/tabs.js"></script>
  <script src="assets/js/video.js"></script>
  <script src="assets/js/slick-slider.js"></script>
  <script src="assets/js/fees.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="crossorigin="anonymous"></script>
  <script>
   
  </script>
</body>
</html>