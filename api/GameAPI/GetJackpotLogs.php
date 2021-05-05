
<?php
session_start();
$auth_token = $_SESSION["auth"];
$Currency = $_GET['Currency'];
$RoomID = $_GET['RoomID'];
$ListGames = $_GET['ListGames'];
$MyLogs = $_GET['MyLogs'];

//$auth_token = $_SERVER["HTTP_AUTHORIZATION"];

$response = GetJackpotLogs($Currency,$RoomID,$ListGames,$MyLogs,$auth_token);
$json_data = json_decode($response, 1);
echo $response;

function GetJackpotLogs($Currency,$RoomID,$ListGames,$MyLogs,$auth_token) {
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://gameapi.g88.vin/api/GameAPI/GetJackpotLogs?Currency=$Currency&RoomID=$RoomID&ListGames=$ListGames&MyLogs=$MyLogs",
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