<?php

$host = "localhost";
$usuario = "root";
$senha = "123456789";
$banco = "safe_control";

$conn = new mysqli(
    $host,
    $usuario,
    $senha,
    $banco
);

if($conn->connect_error){
    die("Erro: " . $conn->connect_error);
}
?>