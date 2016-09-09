<?php
$parkhausdaten = [
$b_firma = $_POST[b-firma],
$b_name = $_POST[b-name],
$b_vorname = $_POST[b-vorname],
$b_strasse = $_POST[b-strasse],
$b_hausnummer = $_POST[b-hausnummer],
$b_plz = $_POST[b-plz],
$b_stadt = $_POST[b-stadt],
$b_nummer = $_POST[b-nummer],
$p_parkhaus = $_POST[p-parkhaus],
$p_strasse = $_POST[p-strasse],
$p_nummer = $_POST[p-nummer],
$p_plz = $_POST[p-plz],
$p_stadt = $_POST[p-stadt],
$p_sektor1 = $_POST[p-sektor1],
$p_sektor2 = $_POST[p-sektor2],
$p_sektor3 = $_POST[p-sektor3],
$p_sektor4 = $_POST[p-sektor4],
$p_mapsLongitude = $_POST[p-mapsLongitude],
$p_mapsLatitude = $_POST[p-mapsLatitude],
$p_mapsAltitude = $_POST[p-mapsAltitude],
];

foreach($parkhausdaten as $key){
    json_encode($key);
}






/*
$parkhausname = strip_tags($_REQUEST['name']);

// parkhauscounter laden
$counterfile = "../data/parkhauscounter";
$parkhauscounter = intval(file_get_contents($counterfile));
$pljson = "../data/parkhausliste.json";

// in parkhausliste.json das neue Parkhaus einfügen
$parkhausliste = json_decode(file_get_contents($pljson), true);
$parkhausliste[] = array(
    "id" => $parkhauscounter,
    "p-parkhaus" => $parkhausName,
    "p-strasse" => $parkhausStrasse,
    "p-nummer" => $parkhausNummer,
    "p-plz" => $parkhausPlz,
    "p-stadt" => $parkhausStadt,
    "p-sektor1" => $sektorNormal,
    "p-sektor2" => $sektorFrau,
    "p-sektor3" => $sektorHandicap,
    "p-sektor4" => $sektorUeberwachung,
    "b-firma" => $besitzerFirma,
    "b-name" => $besitzerName,
    "b-vorname" => $besitzerVorname,
    "b-strasse" => $besitzerStrasse,
    "b-hausnummer" => $besitzerHausnummer,
    "b-plz" => $besitzerPlz,
    "b-stadt" => $besitzerStadt,
    "b-nummer" => $besitzerTelefonnummer,
    "p-mapsLongitude" => $parkhausMapsLongitude,
    "p-mapsLatitude" => $parkhausMapsLatitude,
    "p-mapsAltitude" => $parkhausMapsAltitude);
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
*/
