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
    $sql = "use testPDO;";
    $conn->exec($sql);
    echo "database changed successfully to testPDO!\n";

    $sql = "select name from user_info;";

    foreach($conn->query($sql) as $row) {
        echo $row[0] . "\n";
    }

    echo $conn = null;
    echo "connection is closed!\n";

} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
