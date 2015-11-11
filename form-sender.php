<?php

if(isset($_POST["name"])) {
	$name = $_POST["name"];
	$company = $_POST["company"];
	$phone = $_POST["phone"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	$send_to = 's.bozhko@byyd.me';
	$send_from = 'realty@mail.ru';

	mail($send_to, $name, $company, $message, 'From: '.$send_from);
	echo "HELLO";
}

?>