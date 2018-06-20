<!-- Use PHP to connect to the MySQL database -->
<!-- Reference from "http://www.runoob.com/php/php-mysql-create.html" -->
<?php
$servername = "localhost";
$username = "root";

try {
    $conn = new PDO("mysql:host=$servername;dbname=myDB", $username);
    echo "connect successfully\n";

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // use exec to execute the sql statement
    $sql = "create database testPDO;";
    $conn->exec($sql);
    echo "database 'testPDO' created successfully!\n";

    echo $conn = null;
    echo "connection is closed!\n";
    
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
