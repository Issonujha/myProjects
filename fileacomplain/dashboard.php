<?php include('connection.php'); ?>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
 h2 {text-align: center;}
 
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;

}
</style>
</head>
<body>

<h2>Student Grievance Form</h3>

<div class="container">
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">
     <label for="mname">Middle Name</label>
    <input type="text" id="mname" name="middlename" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">


 <label for="Enumber">Enrollement number</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">
 

    <label for="Programe">Programe </label>
    <select id="Programe" name="Programe ">
      <option value="MCA">MCA</option>
      <option value="BCA">BCA</option>
      <option value="B.TECH">B.TECH</option>
       <label for="Programe">Course Programe</label>
        </select>
       
    <label for="Complaint">Complaint</label>
    <select id="Complaint" name="Complaint ">
      <option value="Class Timing">Class Timing</option>
      <option value="Computer Lab">Computer Lab</option>
      <option value="Faculty">Faculty</option>
      <option value=""></option>
       <label for="Complaint">Complaint</label>
       
    </select>

    <textarea id="subject" name="subject" placeholder="Enter your complaint      details......." style="height:200px"></textarea>
   

    <input type="submit" value="Submit">
  </form>
</div>

</body>
</html>