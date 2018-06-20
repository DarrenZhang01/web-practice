<?php
// Simple php server that processes the parameter using $_GET and $_POST

/* Check if the key 'name' exists and echo it */
if ($_GET["name"]) {
    echo $_GET["name"] . "\n";
} else {
    echo "do not have this key-value pair in this url!\n";
}
?>
