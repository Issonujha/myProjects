<?php
    if(isset($_POST['submit'])) {
    $email = $_POST['email'];
    $subject = 'Your subject comes up here';
    $message = 'Body of the mail';
    mail($email, $subject, $message);
?>