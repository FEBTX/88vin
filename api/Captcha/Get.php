<?php
session_start();
$auth_token = $_SESSION["auth"];
$length = $_GET['length'];
$height = $_GET['height'];
$width = $_GET['width'];
$verify = $_GET['verify'];

$result = capcha($length, $height, $width, $verify, $auth_token);
echo $result;

function capcha($length, $height, $width, $verify, $auth_token) {
$url = "https://id.g88.vin/api/Captcha/Get?length=$length&height=$height&width=$width&verify=$verify";
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL,$url);
//curl_setopt($ch,CURLOPT_POST,true);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch,CURLOPT_HEADER,1);
curl_setopt($ch,CURLOPT_HTTPHEADER,["Authorization: Bearer $auth_token","user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36","origin: https://gamvip.com","Content-Type: application/json","Accept: application/json","Referer: http://gamvip.com/","accept-language: en-US,en;q=0.9,vi;q=0.8"]);

for ($i=0; $i < 10; $i++) { 
    	$raw_content = curl_exec($ch);
    	if ($raw_content) break;
    }
    $netcore_session = "";
    $wjo = "";
    if (preg_match("/\.netcore\.session=([^;]+);/m", $raw_content, $matches)) $netcore_session = $matches[1];
    if (preg_match("/NSC_mc\.je\.h88\.wjo=([^;]+);/m", $raw_content, $matches)) $wjo = $matches[1];
    setcookie(".netcore.session", urldecode($netcore_session), time() + (86400 * 30), "/"); // 86400 = 1 day
    setcookie("NSC_mc.je.h88.wjo", $wjo, time() + (86400 * 30), "/"); // 86400 = 1 day
    return explode("\r\n\r\n", $raw_content)[1];
}