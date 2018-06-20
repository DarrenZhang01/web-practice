<?php
$servername = "localhost";
$username = "root";

try {
    $conn = new PDO("mysql:host=$servername;dbname=myDB", $username);
    echo "connect successfully\n";
    echo $conn = null;
    echo "connection is closed!\n";
}
catch(PDOException $e)
{
    echo $e->getMessage();
}
?>
