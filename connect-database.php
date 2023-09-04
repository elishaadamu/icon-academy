<?php
include 'config.php';
$course = mysqli_real_escape_string($conn, $_GET['course']);
$title = mysqli_real_escape_string($conn, $_GET['title']);
$fname = mysqli_real_escape_string($conn, $_GET['fname']);
$surname = mysqli_real_escape_string($conn, $_GET['sname']);
$mname = mysqli_real_escape_string($conn, $_GET['mname']);
$email = mysqli_real_escape_string($conn, $_GET['email']);
$residence = mysqli_real_escape_string($conn, $_GET['residential-address']);
$phonenumber = mysqli_real_escape_string($conn, $_GET['phonenumber']);
$dateofbirth = mysqli_real_escape_string($conn, $_GET['dateofbirth']);
$nationality = mysqli_real_escape_string($conn, $_GET['nationality']);
$stateoforigin = mysqli_real_escape_string($conn, $_GET['state']);
$maritalstatus = mysqli_real_escape_string($conn, $_GET['status']);
$studentsignature = mysqli_real_escape_string($conn, $_GET['studentsignature']);
$signaturedate = mysqli_real_escape_string($conn, $_GET['signaturedate']);
$amount = mysqli_real_escape_string($conn, $_GET['amount']);
$reference = mysqli_real_escape_string($conn, $_GET['sent_to_database']);

$_SESSION["fname"] = $fname;

mysqli_query($conn, "INSERT INTO student_registration(course, title, firstname, surname, middlename, email, residence, phonenumber, 
dateofbirth, nationality, state, maritalstatus, studentsignature, signaturedate, amount, reference)
 VALUES ('".$course."', '".$title."', '".$fname."', '".$surname."', '".$mname."', '".$email."', 
 '".$residence."', '".$phonenumber."', '".$dateofbirth."', '".$nationality."', '".$stateoforigin."',
 '".$maritalstatus."', '".$studentsignature."', '".$signaturedate."','".$amount."', '".$reference."' )");

mysqli_close($conn)
?>