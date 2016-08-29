<?php
/**
 * Created by IntelliJ IDEA.
 * User: veith
 * Date: 12.03.16
 * Time: 10:29
 */

$parkhausname = strip_tags($_REQUEST['name']);

// parkhauscounter laden
$counterfile = "../data/parkhauscounter";
$parkhauscounter = intval(file_get_contents($counterfile));
$pljson = "../data/parkhausliste.json";

// in parkhausliste.json das neue Parkhaus einfügen
$parkhausliste = json_decode(file_get_contents($pljson), true);
$parkhausliste[] = array("id" => $parkhauscounter, "label" => $parkhausname, "allePlaetzeBesetzt" => false);
file_put_contents($pljson, json_encode($parkhausliste));


// eine leere platzliste erstellen
umask(0);
$platzliste = json_encode(array("parkhausname" =>$parkhausname,  "plaetze"=> array(), "idcounter" => 1 ));
file_put_contents("../data/{$parkhauscounter}.json",$platzliste);


// neuen parkhauscounter speichern
file_put_contents($counterfile, ++$parkhauscounter);

// id zurückgeben
header('Content-Type: application/json');
echo '{"id":' . (--$parkhauscounter) . '}';

