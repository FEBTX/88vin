<?php
session_start();
header("Content-Type: application/json; charset=utf-8");
$auth_token = $_SESSION["auth"];
$currencyID = $_GET['currencyID'];
$GameID = $_GET['GameID'];
$sessionID = $_GET['sessionID'];
$betType = $_GET['betType'];
$r = $_GET['r'];

//$auth_token = $_SERVER["HTTP_AUTHORIZATION"];


$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://minigame.g88.vin/api/MultiLuckyDice/GetSessionBetDetails?currencyID=$currencyID&GameID=$GameID&sessionID=$sessionID&betType=$betType&r=$r",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer $auth_token",
    'Content-Length: 0',
    
  ),
));

$response = curl_exec($curl);

curl_close($curl);

echo $response;

?>