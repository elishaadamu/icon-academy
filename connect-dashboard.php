<?php
include 'config.php';

$fname = mysqli_real_escape_string($conn, $_GET['fullname']);

$email = mysqli_real_escape_string($conn, $_GET['email']);

$phonenumber = mysqli_real_escape_string($conn, $_GET['phonenumber']);

$amount = "150000";

$reference = mysqli_real_escape_string($conn, $_GET['reference']);

mysqli_query($conn, "INSERT INTO tuition_table(fullname, email, phonenumber, 
amount, reference)
 VALUES ('".$fname."', '".$email."', '".$phonenumber."', '".$amount."', '".$reference."')");

mysqli_close($conn);

header("Location: dashboard.php", true, 301); 
?>