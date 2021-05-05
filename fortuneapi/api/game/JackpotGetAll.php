<?php
session_start();
$auth_token = $_SESSION["auth"];
#$CurrencyID = $_GET['CurrencyID'];
$_ = $_GET['_'];
//$author = $_COOKIE['auth1'];
//$auth_token = $_SERVER["HTTP_AUTHORIZATION"];
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://fortuneapi.g88.vin/api/game/JackpotGetAll?CurrencyID=1&_=$_",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
     "Authorization: Bearer $auth_token",
    'authority: fortuneapi.g88.vin'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
