<?php include 'header.php' ?>

<div class="parallax" xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
    <div class="container-content">
        <div class="content">
            <div class="content-content">
                <h1>
                    Erfassen Sie ihre Parkhausdaten
                </h1>
                <br>
                <p>Vergewissern Sie sich, dass die Eingaben korrekt und vollständig sind, damit Ihre Kunden Sie später ohne Probleme finden können.<br>
                </p>

                <br>
                <form id="form-parkhaus" class="form-parkhaus" method="post" action="#">
                    <br>
                    <div class="lefty">
                        <fieldset id="inputs-besitzer">
                            <ul>
                                <li id="firsty">
                                    <label id="title" for="besitzer">Besitzerangaben:</label>
                                </li>
                                <li>
                                    <p>
                                        <label id="label-bes" for="b-firma">Firma:</label>
                                        <input id="b-firma" name="b-firma" type="text" placeholder="Firmenname">
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <label id="label-bes" for="b-name">Name: </label>
                                        <input id="b-name" name="b-name" type="text" placeholder="Name">
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <label id="label-bes" for="b-vorname">Vorname: </label>
                                        <input id="b-vorname" name="b-vorname" type="text" placeholder="Vorname">
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <label id="label-bes" for="b-strasse">Strasse: </label>
                                        <input id="b-strasse" name="b-strasse" type="text" placeholder="Strasse">
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <label id="label-bes" for="b-hausnummer">Hausnummer: </label>
                                        <input id="b-hausnummer" name="b-hausnummer" type="number" placeholder="Hausnummer">
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <label id="label-bes" for="b-plz">Postleitzahl: </label>
                                        <input id="b-plz" name="b-plz" type="number" placeholder="PLZ">
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <label id="label-bes" for="b-stadt">Stadt: </label>
                                        <input id="b-stadt" name="b-stadt" type="text" placeholder="Stadt">
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <label id="label-bes" for="b-nummer">Telefonnummer: </label>
                                        <input id="b-nummer" name="b-nummer" type="number" placeholder="Telefonnummer">
                                    </p>
                                </li>
                            </ul>
                        </fieldset>
                    </div>
                    <div class="righty">
                        <fieldset id="inputs-parkhaus">
                            <ul>
                                <li id="firsty">
                                    <label id="title"  for="parkhaus">Parkhausangaben:</label>
                                </li>
                                <li>
                                    <p>
                                        <label for="p-parkhaus">Parkhaus-Name: </label>
                                        <input id="p-parkhaus" name="p-parkhaus" type="text" placeholder="Parkhaus-Name">
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <label for="p-strasse">Strasse: </label>
                                        <input id="p-strasse" name="p-strasse" type="text" placeholder="Strasse">
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <label for="p-nummer">Hausnummer: </label>
                                        <input id="p-nummer" name="p-nummer" type="number" placeholder="Hausnummer">
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <label for="p-plz">Postleitzahl: </label>
                                        <input id="p-plz" name="p-plz" type="number" placeholder="PLZ">
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <label for="p-stadt">Stadt: </label>
                                        <input id="p-stadt" name="p-stadt" type="text" placeholder="Stadt">
                                    </p>
                                </li>
                            </ul>
                        </fieldset>
                    </div>
                    <div class="lefty-downy">
                        <fieldset id="inputs-sektor">
                            <ul>
                                <li id="firsty">
                                    <label id="title" for="sektor">Parkplatzsektorangaben:</label>
                                </li>
                                <li>
                                    <p>
                                        <label for="p-sektor1">Normale Parkplätze: </label>
                                        <input id="p-sektor1" name="p-sektor1" type="number" placeholder="Anzahl Normaler Parkplätze">
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <label for="p-sektor2">Frauen Parkplätze: </label>
                                        <input id="p-sektor2" name="p-sektor2" type="number" placeholder="Anzahl Frauen Parkplätze">
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <label for="p-sektor3">Handicap Parkplätze: </label>
                                        <input id="p-sektor3" name="p-sektor3" type="number" placeholder="Anzahl Handicap Parkplätze">
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <label for="p-sektor4">Überwachte Parkplätze: </label>
                                        <input id="p-sektor4" name="p-sektor4" type="number" placeholder="Anzahl Überwachter Parkplätze">
                                    </p>
                                </li>
                            </ul>
                        </fieldset>
                    </div>
                    <div class="righty-downy">
                        <ul>
                            <li id="firsty">
                                <label id="title" for="google-maps">Google-Maps Koordinaten: </label>
                            </li>
                            <li>
                                <p>
                                    <label for="p-mapsLongitude">Longitude: </label>
                                    <input id="p-mapsLongitude" name="p-mapsLongitude" type="number" step="any" placeholder="Longitude einfügen">
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label for="p-mapsLatitude">Latitude: </label>
                                    <input id="p-mapsLatitude" name="p-mapsLatitude" type="number" step="any" placeholder="Latitude einfügen">
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label for="p-mapsAltitude">Altitude: </label>
                                    <input id="p-mapsAltitude" name="p-mapsAltitude" type="number" step="any" placeholder="Altitude einfügen (200m)">
                                </p>
                            </li>
                        </ul>
                    </fieldset
                    </div>
                        <input type="submit" value="Daten Speichern" id="save-parkhausdaten">
                </form>

                <div class="button-next-site">
                    <div class="next-site" id="jump-uebersicht">
                        <a id="link-jump-uebersicht" href="uebersicht.php">Weiter zur Übersicht</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<?php include 'footer.php' ?>

