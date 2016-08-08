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
        $('#modeswitcher').on('click', function () {
            $('body').removeClass();

            //Modus umschalten
            if (modus === 'work') {
                modus = 'edit';
            } else {
                modus = 'work';
            }
            $('body').addClass(modus);
        });


        function listeSetzen() {
            window.localtion.href = "index.html?projekt=" + $(this).val();
        }


        function platzRendern(platzElement) {
            var $platz = $('<li>', {
                html: platzElement.platz,
                class: istDerPlatzBesetzt(),
                "data-platzid":platzElement.id,
                "data-besetzt": platzElement.besetzt,
                contenteditable: true
            });

            $platz.prepend('<span class="icon"></span>');

            function istDerPlatzBesetzt() {
                if(platzElement.besetzt) {
                    return 'besetzt';
                }
                return 'frei';
            }
            return $platz;
        }


        /**
         * Aktuelisiert eine Liste
         * @param selector (selector) Selektor für Zielelement und das die <li> angehängt werden
         * @param daten (json) Daten
         */

        function PlatzlisteAktualisieren(daten) {
            var $platzliste = $('#platzliste');
            $platzliste.find('li').remove();
            daten.platz.forEach(function (element) {
                var $platz = $platzRendern(element);
                $platzliste.append($platz);
            });
        }






    });
});
