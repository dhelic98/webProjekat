<?php  
if(isset($_POST['submit'])){
	$to = "dzenan_helic@hotmail.com";
$name = $_POST['name'];
$email = $_POST['email'];
$txt = $_POST['message'];
$headers = "From: {$email}" . "\r\n" .
"CC: somebodyelse@example.com";
mail($to,$headers,$txt);
header("Location: index.html#contact");
	
}
else{
header("Location: index.html#contact");
}
?>