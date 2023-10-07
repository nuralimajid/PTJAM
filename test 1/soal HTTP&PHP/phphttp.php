<?php
// Soal Nomor 12: HTTP header untuk redirect ke https://google.com
header("Location https://google.com/");
exit;

// Soal Nomor 13: HTTP header agar respons dari server dianggap berformat JSON
header("Content-Type:application/json");

//soal php nomor 14
//contoh data JSON
$data = array(
    'nama'=> 'Nur Ali Majid',
    'usia'=>25,
    'domisili'=>"serpong, kota tangerang selatan",
);

$JsonData = json_encode($data); // mengubah format array data ke JSON

echo $JsonData; // memanggil data

//Soal php nomor 15
$_SERVER['REQUEST_METHOD'] //Merupakan supervariabelyang berisi semua request Methode seperti GET, POST, PUT, FETCH

//Soal PHP nomor 16
$b= ($a== 'one')?1:0;
?>
