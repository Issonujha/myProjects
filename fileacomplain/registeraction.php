<?php //include('connection.php') ?>
<?php
       /* if(isset($_POST['sign'])) {
            // $check = $_POST['check'];
            // echo "$check";
            if(empty($_POST['check'])) {
                echo "Check the checkbox";
                return;
            }
        }
        if(isset($_POST['sign'])) {
            $email = $_POST['email'];
            $name = $_POST['name'];
            $dob = $_POST['DOB'];
            $pass = $_POST['psw'];
            $rep = $_POST['psw-repeat'];
            $sql_email = "SELECT `email` FROM `sign_up` where `email`='$email'";
            $result = mysqli_query($conn, $sql_email);
            $rows = mysqli_num_rows($result);
            if($pass!=$rep) {
                echo "Re Check Your password".$conn->connect_error;
                return;
            }
            if($rows>=1) {
                echo "Email Exists".$conn->connect_error;
                return;
            }
            $sql = "INSERT INTO `sign_up`(`email`, `name`,`DOB`, `psw`) VALUES ('$email','$name','$dob', '$pass')";
            if(mysqli_query($conn, $sql)) {
                echo "Data Inserted". "<a href = 'login.php'>". " Login Now!"."</a>";
            }
            else {
                echo "Error to connect".$conn->connect_error;
            }
        }*/
    ?>