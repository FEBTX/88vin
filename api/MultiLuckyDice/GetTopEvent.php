
<?php
session_start();
$auth_token = $_SESSION["auth"];
$currencyID = $_GET['currencyID'];
$gameID = $_GET['GameID'];
$eventType = $_GET['eventType'];
$eventDate = $_GET['eventDate'];
$eventDate1 = str_replace( ' ', '%20', $eventDate ); // thay khoản trắng thành %20
$topCount = $_GET['topCount'];
$r = $_GET['r'];


$response = GetTopEvent($currencyID,$gameID,$eventType,$eventDate1,$topCount,$r,$auth_token);
$json_data = json_decode($response, 1);
echo $response;

function GetTopEvent($currencyID,$gameID,$eventType,$eventDate1,$topCount,$r,$auth_token) {
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://minigame.g88.vin/api/MultiLuckyDice/GetTopEvent?currencyID=$currencyID&GameID=$gameID&eventType=$eventType&eventDate=$eventDate1&topCount=$topCount&r=$r",
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