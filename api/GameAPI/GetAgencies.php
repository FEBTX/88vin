
<?php
session_start();
$auth_token = $_SESSION["auth"];
$type = $_GET['type'];

//$auth_token = $_SERVER["HTTP_AUTHORIZATION"];

$response = getdaily($type,$auth_token);
$json_data = json_decode($response, 1);
echo $response;

function getdaily($type,$auth_token) {
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://gameapi.g88.vin/api/GameAPI/GetAgencies?type=$type",
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