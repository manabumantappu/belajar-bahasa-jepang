<?php
$conn = new mysqli("localhost","user","password","database");

$ip = $_SERVER['REMOTE_ADDR'];
$today = date("Y-m-d");

$cek = $conn->query("SELECT * FROM visitor_log 
                     WHERE ip_address='$ip' AND visit_date='$today'");

if ($cek->num_rows == 0) {
  $conn->query("INSERT INTO visitor_log(ip_address,visit_date)
                VALUES('$ip','$today')");
}

$hariIni = $conn->query("SELECT COUNT(DISTINCT ip_address) as total 
                         FROM visitor_log 
                         WHERE visit_date='$today'")->fetch_assoc();

$total = $conn->query("SELECT COUNT(DISTINCT ip_address) as total 
                        FROM visitor_log")->fetch_assoc();

echo json_encode([
  "today"=>$hariIni['total'],
  "total"=>$total['total']
]);
