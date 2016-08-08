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
            data:{listeID:parkhaus,platz:text,platzID:platzID},
            url: 'api/parkplatz.php?method=update',
            success: function (r) {
                callback(r);
            }
            error: function (error) {
                allert(error);
            }
        });
    }






}