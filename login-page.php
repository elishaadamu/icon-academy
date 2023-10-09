<?php
  if(isset($_POST["submit"])){
   
  session_start();
  // declaring the session mechanism
  if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
      header("Location:login-page.php");
  }
  include 'config.php';

$email = $_POST["email"];
$phonenumber = $_POST["phonenumber"];

    $sql = "SELECT * FROM student_registration WHERE email = '$email' AND phonenumber = '$phonenumber' limit 1 ";
    
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0){
        session_start();
            $_SESSION["loggedin"] = true;
            $_SESSION["email"] = $email; 
            $_SESSION["start"] = time();
            $_SESSION["expire"] =  $_SESSION['start'] + (3000000);
            header("Location: dashboard.php");
            while($row = mysqli_fetch_assoc($result)){
             $_SESSION["firstname"] = $row["firstname"];
              $_SESSION["surname"] = $row["surname"];
              $_SESSION["middlename"] = $row["middlename"];
              $_SESSION["id"] = $row["id"];
              $_SESSION["phonenumber"] = $row["phonenumber"];
           }
  }

  $conn->close();

  }
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
    <title>IIPPS Academy - Login - page</title>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"> 
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="assets/css/fontawesome.css">
    <link rel="stylesheet" href="assets/css/templatemo-grad-school.css">
    <link rel="stylesheet" href="assets/css/owl.css">
    <link rel="stylesheet" href="assets/css/lightbox.css">
<!--
    
TemplateMo 557 Grad School

https://templatemo.com/tm-557-grad-school

-->
  </head>
<body>
       <!--header-->
       <header class="main-header clearfix" role="header">
    <div class="flex-logo">
      <a href="index.html" class="abbrevate"><img class="logo" width="150px" height="auto"
          src="assets/images/background-removebg-preview.png" alt=""></a>
    </div>
    <a href="#menu" class="menu-link"><i class="fa fa-bars"></i></a>
    <nav id="menu" class="main-nav" role="navigation">
      <ul class="main-menu">
        <li><a href="index.html" class="external">Home</a></li>
        <li class="has-submenu"><a href="#section2">Apply Courses</a>
          <ul class="sub-menu">
            <li><a href="certificate.html" class="external">Certificate Course</a></li>
            <li><a href="diploma.html" class="external">Diploma Course</a></li>
            <li><a href="advanced-diploma.html" class="external">Advanced Diploma Course</a></li>
          </ul>
        </li>
        <li class="has-submenu"><a href="#section2">Portal</a>
          <ul class="sub-menu">
            <li><a href="/courses/courses.html" class="external">Courses</a></li>
            <li><a href="management-team.html" class="external">Management Team</a></li>
            <li><a href="departments.html" class="external">Our Departments</a></li>
            <li><a href="organization-structure.html" class="external">Organisation Structure</a></li>
            <li><a href="governing-body.html" class="external">Governing body</a></li>
            <li><a href="facilities.html" class="external">Facilities</a></li>
            <li><a href="departments.html" class="external">Departments</a></li>
          </ul>
        </li>
        <!-- <li><a href="application.html" class="external">Payment</a></li> -->
        <li><a href="login-page.php" class="external">Login</a></li>
        <!-- <li><a href="#section5">Video</a></li> -->
        <li><a href="contact.html" class="external">Contact</a></li>
      </ul>
    </nav>
  </header>
    <div class="container" id="container">
      <div class="row">
        <div class="col-lg-6 col-12 ">
            <form action="login-page.php" method="POST">
              <h2 class='header'>Login Page </h2>
              <label for="email-address"><b>Email:</b></label>
              <input type="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="login with a valid email" class="form-control" id="emailaddress" 
                    autocomplete="on"  placeholder="e.g example123@gmail.com" name="email"  required aria-required="true">
              <br>
                <label for="phone-number" class="form-label"><b>Phone Number</b></label>
                <p><input type="tel"  class="form-control" name="phonenumber" id="phonenumber" autocomplete="on" placeholder="Example: 08012345678"
                    title="Phone Number must be a number" pattern="[0-9]{11}"   class="form-control" required></p>
              <br>
              <button  type="submit" name="submit" class="btn btn-success" style="background-color: #172239; border-radius: 0px; border-color: #172239;" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class="fas fa-paperclip"></i> Login
              </button>
            </form> 
      </div>
      <div class="col-lg-6 col-12">
          <img width="100%" height="auto" class="img-container" src="assets/images/login.jpg" alt="">
      </div>
  </div>
</div>
<footer>
    <br>
    <br>
    <div class="container" id="footer-container">
      <div class="row" id="row">
        <div class="col-lg-4 col-12">
          <h5 class="header-footer">ADDRESS</h5>
                    <br>
                    <h6><b>JOS OFFICE:</b></h6>
                    <p>Grace Land International high school Bassa.</p>
                    <h6><b>ABUJA OFFICE:</b></h6>
                    <p>Suite 305, Ebenezer Plaza, Area 1 Garki, FCT Abuja, Nigeria.</p>
        </div>
        <div class="col-lg-3 col-12" style="margin-bottom: 20px;">
          <h5 class="header-footer">OUR MISSION</h5>
          <p>IIPPSA's purpose is to define the future of Professional security and Policy.</p>
          <p>We are guided by a distinct set of values—non-partisanship, independent thought, innovative thinking, cross-disciplinary sponsorship, integrity and professionalism, and talent development.</p>
        </div>
        <div class="col-lg-2 col-12">
         <ul style="color: white;">
          <h5 class="header-footer">Navigation</h5>
          <li><a href="index.html" style="color: white;">Home</a></li>
          <li><a href="courses.html" style="color: white;">Courses</a></li>
          <li><a href="login-page.php" style="color: white;">Login</a></li>
         </ul>
        </div>
        <br>
        <div class="col-lg-3 col-12">
          <h5 class="header-footer">CONTACT US</h5>
            <h6><b>Contact:</b></h6><p><a href="tel:07062094716">07062094716</a> | <a href="tel:09122749660">09122749660</a></p>
            <h6><b>E-mail:</b></h6><p><a href="mailto:iippsa23@gmail.com">iippsa23@gmail.com</a></p>
        </div>
      </div> 
      <div class="row">
        <div class="col-12">
          <h5 class="header-footer">Social Links:</h5>
          <div class="social">
            
              <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
              <a href="https://wa.link/n3va6g" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>
          </div>
          <hr style="border: 1px solid white;">
          <p><i class="fa fa-copyright"></i> Copyright 2023 By <a href="index.html" class="external" rel="sponsored" target="_parent">IIPPS ACADEMY</a></p>
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
  <script src="assets/js/custom.js"></script>
  <script>
   
  </script>
</body>
</html>