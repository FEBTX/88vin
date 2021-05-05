<?php
session_start();
$auth_token = $_SESSION["auth"];
$TournamentID = $_GET["TournamentID"];
$CurrencyID = $_GET["CurrencyID"];
$ingame = $_GET["ingame"];
$Page = $_GET["Page"];
$PageSize = $_GET["PageSize"];
$_t = $_GET["_t"];

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://tourottapi.g88.vin/api/OTT/GetTopPlayer?TournamentID=$TournamentID&CurrencyID=$CurrencyID&ingame=$ingame&Page=$Page&PageSize=$PageSize&_t=$_t",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer $auth_token",
    "authority: tourottapi.g88.vin"
    
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
