<?php include('connection.php') ?>
<?php
        if(isset($_POST['login'])) {
            $email = $_POST['email'];
            $psw = $_POST['psw'];
            $sql = "SELECT `email`, `psw` FROM `sign_up` WHERE `email`='$email' and `psw`='$psw'";
            $result = mysqli_query($conn, $sql);
            $count = mysqli_num_rows($result);
            if($count==1) {
                header("location: dashboard.php");
            }
            else {
                echo "Error".$conn->connect_error;
            }
        }
?>