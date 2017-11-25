<?php
// define variables and set to empty values
$usernameErr = $emailErr = "";
$username = $email ="";
$validateuser = $validateemail = 1; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST['username'])) {
    $nameErr = 'Enter UserName!';
} else {
    $userTest = test_input($_POST['username']);

    if (!preg_match('/^[a-zA-Z0-9@_]*$/', $userTest)) {
        $usernameErr = ' Re-Enter UserName! Format Inccorrect! (only alpha, numbers, @_ are allowed)';
		echo $usernameErr;
		$validateuser=0;
    }
}
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
      echo $emailErr;	  
	  $validateemail=0;
    }
  }
    
 
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

if($validateuser == 1 )
{if($validateemail ==1)
{
$con=mysqli_connect('localhost','root','','staynotified');
$user=$_POST['username'];
$email=$_POST['email'];
$pass=$_POST['password'];
$var1="INSERT INTO signup VALUES('$user' , '$email','$pass')";
$pl=mysqli_query($con,$var1);
}
}
?>

