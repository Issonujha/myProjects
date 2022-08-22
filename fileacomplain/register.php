<?php include('connection.php') ?>
<html>
  <head>
    <title> Form: - File a Complain </title>
    <link rel="stylesheet" href="style.css">
    <script src="register.js"></script>
  </head>
<?php
        if(isset($_POST['sign'])) {
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
                echo "<script type='text/javaScript'>
                alert('Password is Wrong??');
                </script>";
                return;
            }
            if($rows>=1) {
               echo '<script>alert("Email exist!!")</script>';
                //return;
            }
            else{
            $sql = "INSERT INTO `sign_up`(`email`, `name`,`DOB`, `psw`) VALUES ('$email','$name','$dob', '$pass')";
            if(mysqli_query($conn, $sql)) {
                echo "<script type='text/javaScript'>
                alert('Registerd!!');
                </script>". "<a href = 'login.php'>". " Login Now!"."</a>";
            }
            else {
                echo "Error to connect".$conn->connect_error;
            }
            }
        }
    ?>
<body style="background-image:url('background.jpg'); background-repeat: no-repeat; background-size: 100% 100%;">
  <div class="form" align="center">
        <!-- <p align="center"> --><br>
            <font size="5" color="white"><b> "Sign Up To File A Complain" </b></font>
        <!-- </p> -->
    <br><br>
    <form id="form" action="register.php" method="post">
        <div class="tab-content">
            <div id="sonusignup" align="center">
                <div id="here">
                    <h1 align="center">Sign Up here!</h1>
                </div>
                    <p align="center"><u>Please fill in this form to create an account.</u></p>
                <hr>
                <label for="email"><b>E-mail</b>
                <br>
                </label>
                    <input type="text" id="email"placeholder="Enter Email" name="email">
                <br>
                <label for="Name"><b>Name</b></label>
                <br>
                    <input type="text" id="name" placeholder="Enter Name" name="name">
                <br>
                <label for="date of birth"><b>DOB</b></label>
                <br>
                    <input type="date" id="DOB" placeholder="DOB" name="DOB">
                <br>
                <label for="password"><b>Password</b></label>
                <br>
                    <input type="password" id="password" placeholder="Enter Password" name="psw">
                <br>    
                <label for="password-repeat"><b>Repeat Password</b></label>
                <br>
                    <input type="password" id="rptpassword" placeholder="Repeat Password" name="psw-repeat">
                <br>  
                <pre><p><input type="checkbox" id="check" name="check">By signing up,you agree to the Terms of Services and privacy <br>policy including Cookies Use.</p></pre>
                <div class="clearfix">
                <a href="index.php"><input type="button" id="home" class="cancelbtn" value="Home"></a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="submit" name="sign" id ="submit" onClick="checkForm(form);" value="Submit">&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="login.php"><input type="button" id="login" value="Log In"></a>
                </div>
            </div>
        </div>
    </form>
</body>
</html>