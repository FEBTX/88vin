<?php
$raw_data = file_get_contents("php://input");
$json_data = json_decode($raw_data, 1);
$Username = $json_data['Username'];
$CurrencyID = $json_data['CurrencyID'];
$ServiceID = $json_data['ServiceID'];

$result = SendSMS($Username, $CurrencyID, $ServiceID);
$json_data = json_decode($result, 1);
echo $result;

function SendSMS($Username, $CurrencyID, $ServiceID) {
    $url = "https://id.g88.vin/api/Account/SendSMS";
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POST,true);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch,CURLOPT_HEADER,0);
    $data = "{\"CurrencyID\":$CurrencyID,\"ServiceID\":$ServiceID,\"Username\":\"$Username\"}";
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch,CURLOPT_HTTPHEADER,["authority: id.g88.vin","User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36","Content-Type: application/json","Accept: application/json","Referer: http://m88.vin/","Accept-Language: vi,vi-VN;q=0.9,fr-FR;q=0.8,fr;q=0.7,und;q=0.6,de;q=0.5,pl;q=0.4"]);
    $result = curl_exec($ch);
    return $result;
}
?>