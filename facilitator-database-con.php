<?php
include 'config.php';
$fname = mysqli_real_escape_string($conn, $_GET['fname']);

$email = mysqli_real_escape_string($conn, $_GET['email']);

$phonenumber = mysqli_real_escape_string($conn, $_GET['phonenumber']);

$course = mysqli_real_escape_string($conn, $_GET['course']);

mysqli_query($conn, "INSERT INTO facilitators_registration (fullname, email, phonenumber, course, amount)
 VALUES ('".$fname."', '".$email."', '".$phonenumber."', '".$course."')");
  
mysqli_close($conn);

header("Location: login-page.php", true, 301); 
?>