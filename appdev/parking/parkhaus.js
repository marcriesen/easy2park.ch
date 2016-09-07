$(document).ready(function () {
    'use strict';

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
        success: function(r){
            parkhauslisteParsen(r)
        },
        error: function () {
            alert("Der Server ist kapputt");
        }
    });


    function parkhauslisteParsen(r) {
        r.forEach(function (e) {
            addParkhaus(e.parkhaus.label, e.parkhaus.id, e.parkhaus.alleParkplaetzeBesetzt);
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
            contenteditable: false,
            html: label,
            id: id,
            class: (besetzt) ? 'allesBesetzt' : ''
        }); // ternary operator, siehe https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

        var $icon = $('<span/>', {class: 'icon'});
        $parkhaus.prepend($icon);
        $parkhausliste.append($parkhaus);
    }


    $('#entry').on('keypress', function (e) {
        // Wenn Enter gedrückt wird
        if (e.charCode === 13) {

            var text = this.value;
            var besetzt = false;

            var id = ''; // TODO ID generieren.

            addParkhaus(this.value, id, besetzt);
            // TODO send to server
            this.value = '';
        }
    });


    $parkhausliste.on('keypress', function (event) {
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
    $parkhausliste.on('click', function (event) {

        // ermitteln wir das projekt
        var $parkhaus = $(event.target).parent();
        // und die Parkhausid attr('id')
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


    $('#form-parkhaus').on('submit', function(e){
        e.preventDefault();

        // console.log($(this).serialize());

        var data = JSON.stringify($(this).serializeArray());

        console.log(data);
    });
