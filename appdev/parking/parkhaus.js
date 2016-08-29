$(document).ready(function () {
    'use strict';

    // Backlink hinzufügen
    var $link = $("<a/>", {href: './index.html', text: 'zurück zu den Parkplätzen'});
    $("body").prepend($link);

    var $parkhausliste = $('#parkhausliste');

    var modus = 'work';

    $('#modeswitcher').on('click', function () {

        $('body').removeClass();
        // Modus umschalten
        if (modus === 'work') {
            modus = 'edit';
        } else {
            modus = 'work';
        }
        $('body').addClass(modus);

    });

    // Parkhausliste laden
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: 'data/parkhaus.json',
        success: parkhauslisteParsen,
        error: function () {
            alert("Der Server ist kapputt");
        }
    });


    function parkhauslisteParsen(jsondata) {

        jsondata.forEach(function (e) {
            addParkhaus(e.label, e.id, e.alleParkplaetzeBesetzt);
        });
    }

    /**
     * Fügt ein Parkhaus der Liste hinzu (nur UI)
     * @param label
     * @param id
     * @param erledigt (bool) Indikator der anzeigt ob alle Parkplätze in diesem Parkhaus besetzt sind
     *
     */
    function addParkhaus(label, id, besetzt) {

        label = label || 'unbekannt'; // wir geben dem label den defaultwert unbekannt

        var $parkhaus = $('<li/>', {
            contenteditable: true,
            html: label,
            id: id,
            class: (besetzt) ? 'allesBesetzt' : ''
        }); // ternary operator, siehe https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

        var $icon = $('<span/>', {class: 'icon'});
        $parkhaus.prepend($icon);
        $parkhausliste.append($parkhaus);
    }

    // Auf  Input Feld ...
    $('.eingabe').on('keypress', function (e) {
        // bei drücken von Enter (Zeichen #13) soll dieser eingegebene Text in die Liste angehängt werden
        if (e.charCode === 13) {
            ParkhausAdden(this.value);
            // und das Eingabefeld wieder leer sein
            this.value = '';
        }
    });

    // Parkhaus an server schicken und in die Liste eintragen
    function parkhausAdden(parkhausname) {
        easy2park.parkhausDS.create(parkhausname,callback);
        function callback(data) {
            var id = data.id;
            addParkhaus(parkhausname, id);
        }

    }


    $parkhauslisteliste.on('keypress', function (event) {
        // Wenn enter gedrückt wird...
        if (event.charCode === 13) {
            event.preventDefault(); // event nicht weiter geben
            var $parkhaus = $(event.target); // auf welchem element ist es passiert
            var idVomParkhaus = $parkhaus.attr('id');
            var neuerName = $parkhaus.text();
            easy2park.parkhausDS.update(idVomParkhaus,neuerName,callback);

        }
        function callback() {
            return true;
        }
    });

    // wenn wir auf ein Projekt clicken
    $parkhauslisteliste.on('click', function (event) {

        // ermitteln wir das projekt
        var $parkhaus = $(event.target).parent();
        // und. die Parkhausid attr('id')
        var parkhausID = $parkhaus.attr('id');

        // und wir im modus "edit" sind und auf den Kübel drücken (span)
        if (modus === 'edit' && $(event.target).is('span.icon')) {

            // wir teilen dem Server mit, dass er das Projekt löschen soll
            parkhausLoeschen(parkhausID);
            // wir entfernen das Projekt aus der liste
            $parkhaus.remove();
        }


        if (modus === 'work' && $(event.target).is('span.icon')) {
            // wir leiten auf die index page um
            window.location.href = "index.html?parkhaus=" + parkhausID;
        }


    });

    function parkhausLoeschen(parkhausID) {
        //TODO: Info an server senden, er soll bitte das Projekt mit der entsprechenden ID löschen
    }

    });