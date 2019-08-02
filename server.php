<?php

$responseText = '';

$responseText .= $_POST["text"];

if(isset($_POST["radio"])){
    $responseText .=  $_POST["radio"];
};

if(isset($_POST["checkbox"])){
    $responseText .=  $_POST["checkbox"];
};

$responseText .=  $_POST["file"];
$responseText .=  $_POST["select"];
   
    echo $responseText; 
?>