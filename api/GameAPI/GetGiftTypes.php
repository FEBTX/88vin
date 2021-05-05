<?php
session_start();
$auth_token = $_SESSION["auth"];
$CurrencyID = $_GET['CurrencyID'];
$RoomID = $_GET['RoomID'];
$GameID = $_GET['GameID'];
$GiftTypeID = $_GET['GiftTypeID'];



//$auth_token = $_SERVER["HTTP_AUTHORIZATION"];

$response = GetGiftTypes($CurrencyID,$RoomID,$GameID,$GiftTypeID,$auth_token);
$json_data = json_decode($response, 1);
echo $response;

function GetGiftTypes($CurrencyID,$RoomID,$GameID,$GiftTypeID,$auth_token) {
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://gameapi.g88.vin/api/GameAPI/GetGiftTypes?CurrencyID=$CurrencyID&RoomID=$RoomID&GameID=$GameID&GiftTypeID=$GiftTypeID",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
     "Authorization: Bearer $auth_token",
     "authority: gameapi.g88.vin"
   
  ),
));

$response = curl_exec($curl);
curl_close($curl);
return $response;

}