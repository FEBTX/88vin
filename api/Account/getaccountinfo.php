<?php
session_start();
$auth_token = $_SESSION["auth"];

//$currencyID = $_GET['currencyID'];
//$auth_token = $_SERVER["HTTP_AUTHORIZATION"];


//$token = explode(' ', $auth_token)[1];

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://id.g88.vin/api/Account/getaccountinfo?currencyID=1",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer $auth_token",
    "authority: id.g88.vin",
    "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36",
    "content-type: application/json"
    
    
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
