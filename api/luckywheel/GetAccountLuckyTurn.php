
<?php
session_start();
$auth_token = $_SESSION["auth"];
$type = $_GET['type'];
if($type==1){
        $stype = '?type=';
		
	}
else $stype ='';
//$author = $_COOKIE['auth1'];
//$auth_token = $_SERVER["HTTP_AUTHORIZATION"];

$response = GetAccountLuckyTurn($auth_token,$type,$stype);
$json_data = json_decode($response, 1);
echo $response;

function GetAccountLuckyTurn($auth_token,$type,$stype) {
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://gameapi.g88.vin/api/luckywheel/GetAccountLuckyTurn$stype$type",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
     "Authorization: Bearer $auth_token",
     "authority: gameapi.g88.vin",
   
  ),
));

$response = curl_exec($curl);
curl_close($curl);
return $response;

}