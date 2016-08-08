<?php

if($_REQUEST["istBesetzt"]=="true"){
    $istBesetzt = true;
} else {
    $istBesetzt = false;
}

$listeID = basename($_REQUEST["listeID"]);
$platzID = $_REQUEST["platzID"];
$file = "../data/{$listeID}.json";

if(file_exists($file)) {
    $fp = fopen($file,'r');
    $json = fread($fp,filesize($file));
    $liste = json_decode($json,true);

    foreach ($liste["plaetze"] as $i => $item) {
        if($item["id"] == $platzID) {
            $liste ["plaetze"][$i]["besetzt"] = $istBesetzt;
        }
    }

    $json = json_encode($liste);
    file_put_contents($file,$json);
    header('Content-Type: application/json');
    echo '{"message":"erfolgreich aktualisiert"}';
} else {
    header("HTTP/1.00 400 Nicht existierende Liste");
    echo "Nicht existierende Liste";
}