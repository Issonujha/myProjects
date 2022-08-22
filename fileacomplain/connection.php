<?php
$conn = new mysqli("localhost", "root", "", "fileacomplain");
if($conn->connect_errno){
    echo "Fix Advance Database".$conn->connect_errno;
}
else {
    echo "<center><div style='background-color: lightgreen;'>Ready to go</div></center><br>";
}
?>