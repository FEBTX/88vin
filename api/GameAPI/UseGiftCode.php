<?php
session_start();
$auth_token = $_SESSION["auth"];
$raw_content = file_get_contents("php://input");
$json_data = json_decode($raw_content, 1);
$Captcha = $json_data['Captcha'];
$Giftcode = $json_data['Giftcode'];
$Verify = $json_data['Verify'];


//$auth_token = $_SERVER["HTTP_AUTHORIZATION"];


	
$result = UseGiftCode($raw_content, $auth_token);
$json_data = json_decode($result, 1);

echo $result;

function UseGiftCode($raw_content, $auth_token) {
    $url = "https://gameapi.g88.vin/api/GameAPI/UseGiftCode";
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POST,true);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch,CURLOPT_HEADER,0);
  //  $data = "{\"OTPType\":$OTPType,\"OTP\":\"$otpp\"}";
    curl_setopt($ch, CURLOPT_POSTFIELDS, $raw_content);
    curl_setopt($ch,CURLOPT_HTTPHEADER,["Authorization: Bearer $auth_token","Content-type: application/json"]);
 
	$raw_content = curl_exec($ch);

curl_close($ch);
return $raw_content;

}
?>