<?php
session_start();
$auth_token = $_SESSION["auth"];
$currencyID = $_GET['currencyID'];
$eventDate = $_GET['eventDate'];
$eventDate1 = str_replace( ' ', '%20', $eventDate ); // thay khoản trắng thành %20
$r = $_GET['r'];
//$author = $_COOKIE['auth1'];
//$auth_token = $_SERVER["HTTP_AUTHORIZATION"];

$response = GetTicketChart($currencyID,$eventDate1,$auth_token,$r);
$json_data = json_decode($response, 1);
echo $response;

function GetTicketChart($currencyID,$eventDate1,$auth_token,$r) {
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://minigame.g88.vin/api/minipoker/GetTicketChart?currencyID=$currencyID&eventDate=$eventDate1&r=$r",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
     "Authorization: Bearer $auth_token",
     "authority: minigame.g88.vin",
   
  ),
));

$response = curl_exec($curl);
curl_close($curl);
return $response;

}
