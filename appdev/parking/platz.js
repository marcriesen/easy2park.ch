$(document).ready(function () {
    'use strict';

    var modus = 'work';

    //Vorausgesetztes Parkhaus ermitteln
    var parkhaus = getParameterByName('parkhaus');

    //init
    easy2park.platzDS.hausListeLaden(function (serverAntwort) {
        if (parkhaus) {
            // dropdown auf gewähltes Parkhaus setzen
            $('.parkhausauswahl').val(parkhaus);
        } else {
            parkhaus = serverAntwort[0].id;
        }

        // Absprungpunkt einfügen
        var $option = $('<$option/>', {
            value: -1,
            html: 'Parkhausliste bearbeiten'
        });

        $('.parkhausauswahl').on('change', listeSetzen);

        $('.eingabe').on('keypress', function (e) {
            // Wenn Enter gedrückt wird
            if (e.charCode === 13) {
                var text = this.value;
                var id = easy2park.platzDS.neuenPlatzHinzufuegen(parkhaus, text, function (id) {
                    var $platz = platzRendern({'platz': text, id: id, besetzt: false});
                    $('#platzliste').append($platz);
                });
                this.value = '';
            }

        });

        // Modeswitcher Funktion
        $('#modesw')


    });
});
