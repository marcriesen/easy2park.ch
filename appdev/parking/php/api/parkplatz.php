<?php
session_start();

// gewünschte Funktion laden
switch ($_REQUEST['method']) {
    case "create":
        include("parkplatz/check.php");
        break;
    case "delete":
        include("parkplatz/delete.php");
        break;
    case "list":
        include ("parkplatz/list.php");
        break;
    case "update":
        include ("parkplatz/update.php");
        break;
    case "check":
        include ("parkplatz/check.php");
        break;
    default:
        header("HTTP/1.0 400 Methode nicht erlaubt");

        echo "Methode nicht erlaubt";
}
