<?php
$con=mysqli_connect("localhost","root");
mysqli_select_db($con,"databasename");
$variable="select age from students where id=2000";
$sql=mysqli_query($con,$sql);
while($row=mysqli_fetch_assoc($sql))
{
echo "{$row['age']};
}
mysqli_close($con);
?>