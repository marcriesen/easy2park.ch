<?php

$platz = $_REQUEST["platz"];
$listeID = $_REQUEST["listeID"];
$file = "../data/{$listeID}.json";

if (file_exists($file)){
    $fp = fopen($file,'r');
    $json =fread($fp,filesize($file));
    $liste = json_decode($json,true);
    $liste["platz"][] = array("id"=>$liste["idcounter"], "platz"=> $platz, "besetzt"=> false );

    $liste["idcounter"] ++;
    $json =json_encode($liste);
    file_put_contents($file,$json);
    header('Content-Type: application/json');
    echo '{"id":' . ($liste["idcounter"]-1) .'}';
} else {
    header ("HTTP/1.00 400 Nicht existierender Sektor");
    echo "Nicht existierender Sektor";
}