<?php
include 'config.php';
$fname = mysqli_real_escape_string($conn, $_GET['fname']);
$surname = mysqli_real_escape_string($conn, $_GET['sname']);

$email = mysqli_real_escape_string($conn, $_GET['email']);

$phonenumber = mysqli_real_escape_string($conn, $_GET['phonenumber']);

$course = mysqli_real_escape_string($conn, $_GET['course']);

$amount = "13000";

mysqli_query($conn, "INSERT INTO student_registration_t(firstname, surname, email, phonenumber, course, amount)
 VALUES ('".$fname."', '".$surname."', '".$email."', '".$phonenumber."', '".$course."', '".$amount."')");

mysqli_close($conn);

header("Location: download.php", true, 301); 
?>