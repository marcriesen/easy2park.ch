<?php

$id = basename($_REQUEST["id"]);

$fp = fopen("../data/{$id}.json",'rb');
if($fp != false) {
    header('Content-Type: application/json');
    fpassthru($fp);
} else {
    header("HTTP/1.0 400 Nicht existierende Liste");
    echo "Nicht existierende Liste";
}