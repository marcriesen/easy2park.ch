easy2park.platzDS = function () {
    'use strict';

    return {
        platzAktualisieren: platzAktualisieren,
        platzLoeschen: platzLoeschen,
        neuenPlatzHinzufuegen: neuenPlatzHinzufugen,
        updatePlatz: updatePlatz,
        hausListeLaden: hausListeLaden,
        platzListeLaden: platzListeLaden
    };

    /**
     * Aktualisiert den Parkplatz auf dem Server
     * @param parkhaus (id) name des Parkhauses
     * @param platzID (id) ID des Parkplatzes
     * @param text (string) Neuer Text vom Parkplatz
     */

    function updatePlatz(parkhaus, platzID, text, callback) {
        $.ajax({
            type: 'POST',
            dataType: "json",
            data: {listeID: parkhaus, platz: text, platzID: platzID},
            url: 'php/api/parkplatz.php?method=update',
            success: function (r) {
                callback(r);
            }
            error: function (error) {
                allert(error);
            }
        });
    }


    /**
     * Fügt einen neuen Parkplatz auf dem Server hinzu
     * @param platz (string) Text vom Platz
     * @returns {Number} (id) die ID des Platzes
     */
    function platzHinzufuegen(parkhaus, text, callback) {
        $.ajax({
            type: 'GET',
            dataType: "json",
            data: {listeID: parkhaus, platz: text},
            url: 'php/api/parkplatz.php?methode=create',
            success: function (jsonBody) {
                callback(jsonBody.id);
            },
            error: function (error) {
                alert(error);
            }
        });
    }

    /**
     * Löscht einen Parkplatz anhand der übergeben ID
     * @param platzID (id) ID eines Platzes
     */
    function platzLoeschen(parkhaus, platzID) {
        $.ajax({
            type: "POST",
            data: {listeID: parkhaus, platzID: platzID},
            url: 'php/api/parkplatz.php?method=delete',
            success: function (r) {
                console.log(platzID + 'wurde gelöscht');
            },
            error: function (error) {
                console.dir(error)
            }
        });

    };

    /**
     * Parkplatzliste aktualisieren
     */
    function platzAktualisieren(parkhaus, platzID, besetzt, callback) {
        $.ajax({
            type: "POST",
            dataType: "json",
            data: {listeID: parkhaus, besetzt: besetzt, platzID: platzID},
            url: 'php/api/parkplatz.php?method=check',
            success: function (r) {
                if (easy2park.isFunction(callback)) {
                    callback(r);
                }
            },
            error: function (error) {
                alert(error);
            }
        });
    }

    function platzListeLaden(callback) {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: 'data/parkhaeuser.json',
            success: function (parkhausJson) {
                parkhausJson.forEach(function (element) {
                    var $option = $('<option/>', {
                        value: element.id,
                        html: element.label
                    });
                    $('.parkhausauswahl').append($option);
                });
                callback(parkhausJson);
            },
            error: function () {
                alert("Der Server ist defekt");
            }
        });

    };


    /**
     * Ladet eine Parkplatzliste vom Server
     * @param parkhausListe (id) ID einer Liste
     * @param callback (function) Die Funktion die ausgeführt wird, wenn wir die Liste bekommen haben
     * @constructor
     */
    function platzListeLaden(parkhausListe, callback) {
        if (parkhausListe === "-1") {
            // Auf Parkhausseite wechseln
            window.location.href = "parkhaus.html";
        } else {
            var aktuellesParkhaus = parkhausListe;
            $.ajax({
                type: "GET",
                dataType: "json",
                data: {id:parkhausListe},
                url: 'php/api/parkplatz.php?method=list',
                success: function (jsonBody) {
                    callback(jsonBody);
                },
                error: function (error) {
                    alert('nichts gefunden');
                }
            });
        }
    }
}();