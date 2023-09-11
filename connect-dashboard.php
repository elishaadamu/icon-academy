<?php
include 'config.php';

$fname = mysqli_real_escape_string($conn, $_POST['fullname']);

$email = mysqli_real_escape_string($conn, $_POST['email']);

$phonenumber = mysqli_real_escape_string($conn, $_POST['phonenumber']);

$amount = "150000";

$reference = mysqli_real_escape_string($conn, $_POST['reference']);

mysqli_query($conn, "INSERT INTO tuition_table(fullname, email, phonenumber, 
amount, reference)
 VALUES ('".$fname."', '".$email."', '".$phonenumber."', '".$amount."', '".$reference."')");

mysqli_close($conn);

header("Location: login-page.php", true, 301); 
?>