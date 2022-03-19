<?php 
    $dbHost = 'localhost:3001';
    $dbUsername = 'root';
    $dbPassword = 'root';
    $dbName = 'formulario-gustavo';

    $connect = new mysqli(dbHost, dbUsername, dbPassword, dbName);

    if($connect->connect_errno){
        echo "Erro";
    }else {
        echo "Conexao efetuada com sucesso";
    }
?>  