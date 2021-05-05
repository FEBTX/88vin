
<?php
session_start();
$auth_token = $_SESSION["auth"];
$status = $_GET['status'];
$Page = $_GET['Page'];
$PageSize = $_GET['PageSize'];
//$author = $_COOKIE['auth1'];
//$auth_token = $_SERVER["HTTP_AUTHORIZATION"];

$response = GetInboxes($status,$Page,$PageSize,$auth_token);
$json_data = json_decode($response, 1);
echo $response;

function GetInboxes($status,$Page,$PageSize,$auth_token) {
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://profile.g88.vin/api/profile/GetInboxes?status=$status&Page=$Page&PageSize=$PageSize",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer $auth_token",
    "authority: profile.g88.vin",
   
  ),
));

$response = curl_exec($curl);
curl_close($curl);
return $response;

}