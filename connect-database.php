<?php
include 'config.php';

 
header("Location: downloadfile.html", true, 301);  


$title = mysqli_real_escape_string($conn, $_GET['title']);
$fname = mysqli_real_escape_string($conn, $_GET['fname']);
$surname = mysqli_real_escape_string($conn, $_GET['sname']);
$mname = mysqli_real_escape_string($conn, $_GET['mname']);
$status = mysqli_real_escape_string($conn, $_GET['status']);
$email = mysqli_real_escape_string($conn, $_GET['email']);
$residence = mysqli_real_escape_string($conn, $_GET['residentialaddress']);
$phonenumber = mysqli_real_escape_string($conn, $_GET['phonenumber']);
$dateofbirth = mysqli_real_escape_string($conn, $_GET['dateofbirth']);
$nationality = mysqli_real_escape_string($conn, $_GET['nationality']);
$stateoforigin = mysqli_real_escape_string($conn, $_GET['state']);
$course = mysqli_real_escape_string($conn, $_GET['course']);
$studentsignature = mysqli_real_escape_string($conn, $_GET['studentsignature']);
$dateofsignature = mysqli_real_escape_string($conn, $_GET['dateofsignature']);
$amount = "13000";

mysqli_query($conn, "INSERT INTO student_registration(title, firstname, surname, middlename, status,  email, residence, phonenumber, 
dateofbirth, nationality, state, course, studentsignature, dateofsignature, amount)
 VALUES ('".$title."', '".$fname."', '".$surname."', '".$mname."', '".$status."', '".$email."', '".$residence."', '".$phonenumber."', '".$dateofbirth."', '".$nationality."', '".$stateoforigin."', '".$course."', '".$studentsignature."', '".$dateofsignature."', '".$amount."')");

mysqli_close($conn)
?>