<?php
$host = 'localhost';
$username = 'root';
$password = '';
$dbname  = 'icon-academy';

$conn = mysqli_connect($host, $username, $password, $dbname);

if(!$conn){
    echo "Error in connection";
}
else{
    // echo "Connection successfull";
}

?>