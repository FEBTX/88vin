<?php
$TournamentID = $_GET['TournamentID'];
$CurrencyID = $_GET['CurrencyID'];
$ingame = $_GET['ingame'];
$Page = $_GET['Page'];
$PageSize = $_GET['PageSize'];
$auth_token = $_SERVER["HTTP_AUTHORIZATION"];
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://tourpokerapi.g88.vin/api/PokerTour/GetTopPlayer?TournamentID=$TournamentID&CurrencyID=$CurrencyID&ingame=$ingame&Page=$Page&PageSize=$PageSize",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    "authorization: $auth_token",
    "authority: tourgoonapi.g88.vin"
    
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
