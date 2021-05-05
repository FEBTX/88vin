<?php
session_start();
$auth_token = $_SESSION["auth"];
$raw_data = file_get_contents("php://input");
$json_data = json_decode($raw_data, 1);
$Captcha = $json_data['Captcha'];
$NewPassword = $json_data['NewPassword'];
$OldPassword = $json_data['OldPassword'];
$Verify = $json_data['Verify'];

$result = ChangePassword($raw_data, $auth_token);
$json_data = json_decode($result, 1);
echo $result;

function ChangePassword($raw_data, $auth_token) {
$netcore_session = urlencode($_COOKIE["_netcore_session"]);
$wjo = $_COOKIE["NSC_mc_je_h88_wjo"];
    $url = "https://id.g88.vin/api/Account/ChangePassword";
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POST,true);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch,CURLOPT_HEADER,0);
 //   $data = "{\"CurrencyID\":$CurrencyID,\"ServiceID\":$ServiceID,\"Username\":\"$Username\"}";
    curl_setopt($ch, CURLOPT_POSTFIELDS, $raw_data);
    curl_setopt($ch,CURLOPT_HTTPHEADER,["Authorization: Bearer $auth_token","Content-type: application/json", "Client-Version: 1.0.19", "Client-Model: Inspiron 7559 (Dell Inc.)", "Client-Name: DESKTOP-5ME79EL", "Client-DeviceID: bdf8d7175c7f186d1e431bfedd4f509afa7f7fc0", "Client-OperatingSystem: Windows 10  (10.0.0) 64bit", "Client-OperatingSystemFamily: Windows", "Client-ProcessorCount: 4", "Client-ProcessorFrequency: 2304", "Client-ProcessorType: Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz", "Client-DeviceType: Desktop", "Client-Token: b6a82eefd19fa69f8bf8a14bf76e6213", "Client-OSType: PC", "Connection: Keep-Alive, TE", "TE: identity", "User-Agent: BestHTTP", "Cookie: .netcore.session=$netcore_session; NSC_mc.je.h88.wjo=$wjo"]);
    for ($i=0; $i < 10; $i++) { 
	$raw_content = curl_exec($ch);
	if ($raw_content) break;
}
curl_close($ch);
return $raw_content;
}
?>