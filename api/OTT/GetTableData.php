<?php
session_start();
$auth_token = $_SESSION["auth"];
$TournamentID = $_GET['TournamentID'];
$_t = $_GET['_t'];

//$auth_token = $_SERVER["HTTP_AUTHORIZATION"];
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://tourottapi.g88.vin/api/OTT/GetTableData?TournamentID=$TournamentID&_t=$_t",
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
    'Cookie: __cfduid=dd341756b5068a99ffa3138703308a1b81612025870'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
