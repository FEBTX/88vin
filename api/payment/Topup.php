<?php
header('Content-Type: application/json; charset=utf-8');
$raw_data = file_get_contents("php://input");
$json_data = json_decode($raw_data, 1);
 // lấy dữ liệu tại đây

if (!isset($json_data['Telco']) || !isset($json_data['Price']) || !isset($json_data['SeriCode']) || !isset($json_data['CardCode'])) {
	$data['success'] = false;
	$data['msg'] = 'Mã thẻ không hợp lệ';
	die(json_encode($data, 1));
}
//cover value nhà mạng
$loaithe = $json_data['Telco'];
if($loaithe== 'Mobifone'){
		$card_type = 'VMS';
	}
else if($loaithe== 'Viettel'){
		$card_type = 'VTT';
	}
else if($loaithe== 'Vinaphone'){
		$card_type = 'VNP';
	}
else $card_type = '88Card'; //id = 3 la mang VINAFONE
//$card_type = $json_data['cardType'];
$card_amount = $json_data['Price'];
$card_serial = $json_data['SeriCode'];
$card_code = $json_data['CardCode'];

$list_params = array(
	'key' => 'd69ef91ec209b0177e377b1547d162e04675ca9ed198c20ad5fe78bd035111f3',
	'cardType' => $card_type,
	'cardSeri' => $card_serial,
	'cardCode' => $card_code,
	'cardValue' => $card_amount,
	'Signature' => md5("d69ef91ec209b0177e377b1547d162e04675ca9ed198c20ad5fe78bd035111f3$card_code$card_serial")
);
$url = 'https://shopdoithe.com/api/sendCard_v2?'.http_build_query($list_params);

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $url,
    CURLOPT_SSL_VERIFYPEER => false
));
$response = curl_exec($curl);
curl_close($curl);
$json_data = json_decode($response, 1);
if ($json_data['status'] == 1) {
	$data['c'] = -100998;
	$data['m'] = "";
} else {
	$data['c'] = -100998;
	$data['m'] = "";
}
die(json_encode($data, 1));
?>