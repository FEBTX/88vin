<?php
session_start();
$auth_token = $_SESSION["auth"];
$type = $_GET['type'];
$date = $_GET['date'];
$date1 = str_replace( ' ', '%20', $date ); // thay khoản trắng thành %20
$Page = $_GET['Page'];
$PageSize = $_GET['PageSize'];
$chanel = $_GET['chanel'];
$CurrencyID = $_GET['CurrencyID'];
//$auth_token = $_SERVER["HTTP_AUTHORIZATION"];
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://tourgoonapi.g88.vin/api/GoonsoloTour/GetCharts?type=$type&date=$date1&Page=$Page&PageSize=$PageSize&chanel=$chanel&CurrencyID=$CurrencyID",
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

