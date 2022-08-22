<?php include('connection.php'); ?>
<html lang="en">
<head>
    <title>Login: Your Complain</title>
    <link rel="stylesheet" href="style_login.css">
</head>
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
                echo '<script type="text/javaScript">
                alert("No file found??");
                </script>';
            }
        }
?>
<body style="background-image:url('homepage.jpg'); background-repeat: no-repeat; background-size: 100% 100%;">
    <center>
    <div id="check">
        <div id="form"> 
            <div id="here">  
                <h1>Log In Here!</h1>
            </div>
            <br>
                <form method="post" action="login.php">
                    <div class="field-wrap">
                        <label>
                            Email Address<span class="req">*</span>
                        </label>
                            <input type="email" id = "email" name ="email" required autocomplete="off"/>
                    </div>
                    <br><br>
                    <div class="field-wrap">
                    <label>
                        Password<span class="req">*</span>
                    </label>
                        <input type="password" id = "password" name="psw" required autocomplete="off"/>
                    </div>
                        <p class="forgot"><a href="getpass.php" >Forgot Password? </a><br>
                        <a href="register.php">signup</a></p>
                        <a href="index.php"><input type="button" id="home" class="cancelbtn" value="Home"></a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="submit" id="login" name="login" value="Log In">
                </form>
        </div>
    </div>
    </center>
</body>
</html>