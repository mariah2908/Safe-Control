<?php

require_once("conexao.php");

$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$matricula = $_POST['matricula'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$cargo = $_POST['cargo'];
$setor_id = $_POST['setor_id'];
$data_admissao = $_POST['data_admissao'];
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];



$sql = "INSERT INTO funcionarios
(nome, cpf, matricula, email, telefone, cargo, setor_id, data_admissao, usuario, senha)
VALUES
('$nome', '$cpf', '$matricula', '$email', '$telefone', '$cargo', '$setor_id', '$data_admissao', '$usuario', '$senha')";

if($conn->query($sql)){
    echo "Funcionário cadastrado com sucesso!";
} else {
    echo "Erro: " . $conn->error;
}
 
?>