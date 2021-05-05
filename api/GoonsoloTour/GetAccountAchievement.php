<?php
session_start();
$auth_token = $_SESSION["auth"];
$room = $_GET['room'];
$status = $_GET['status'];
$Page = $_GET['Page'];
$PageSize = $_GET['PageSize'];
$CurrencyID = $_GET['CurrencyID'];
//$auth_token = $_SERVER["HTTP_AUTHORIZATION"];
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://tourgoonapi.g88.vin/api/GoonsoloTour/GetAccountAchievement?room=$room&status=$status&Page=$Page&PageSize=$PageSize&CurrencyID=$CurrencyID",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer $auth_token",
    "authority: tourgoonapi.g88.vin"
    
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
//echo $date1;
