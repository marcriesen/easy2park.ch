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
        $('.parkhausauswahl').append($option);

        easy2park.platzDS.PlatzlisteLaden(parkhaus, PlatzlisteAktualisieren);

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

    $('#platzliste').on('keypress', function (event) {
        // Wenn Enter gerdückt wird...

        if (event.charCode === 13) {
            event.preventDefault();
            var $platz = $(event.target);
            var neuerTextvomPlatz = $platz[0].innerText;
            var idvomPlatz = $platz.data('platzid');
            easy2park.platzDS.updatePlatz(parkhaus, idvomPlatz, neuerTextvomPlatz, function (r) {
                $('.eingabe').focus();
            });
        }

    });

    $('#platzliste').on('click', function (event) {
        var $platz = $(event.toElement);

        if ($platz.is('span') && modus === 'work') {
            // Parkplatz besetzen
            $platz = $platz.parent();
            var platzID = $task.data('platzid');
            var neuerZustand = !$platz.data('besetzt');
            $task.data('besetzt, neuerZustand');
            $task.toggleClass('beseetzt');
            easy2park.platzDS.platzAktualisieren(parkhaus,platzID, neuerZustand);
        }

        if ($platz.is('span') && modus === 'edit') {
            // Platz löschen
            $platz = $platz.parent();
            var platzID = $platz.data('platzid');
            easy2park.platzDS.platzLoeschen(parkhaus,platzID);
            $platz.remove();
        }
    });

    function getParameterByName(name) {
        var regexS = "[\\?]#" + name + "=([^&#]*)",
            regex = new RegExp(regexS),
            results = regex.exec(window.location.hash);
        if (results == null) {
            return "";
        } else {
            return decodeURIComponent(results[].replace(/\+/g, " "));
        }
    }

    function getHashParameterByName(name) {
        var regexS = "[\\?&#]" + name + "=([^&#]*)",
            regex = new RegExp(regexS),
            results = regex.exec(window.location.hash);
        if (results == null) {
            return "";
        } else {
            return decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    }
});

