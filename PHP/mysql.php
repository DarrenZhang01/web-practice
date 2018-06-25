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

    $sql = "select * from user_info;";
    $result = $conn->query($sql);
    // var_dump($result);
    // echo "The result of the execution is " . $result . "\n";
    if ($result->num_rows > 0) {
        // print data of each row
        while ($row = $result->fetch_assoc()) {
            echo "name: " . $row['name'] . "\n";
        }
    } else {
        echo "0 result" . "\n";
    }
    echo $conn = null;
    echo "connection is closed!\n";

} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
