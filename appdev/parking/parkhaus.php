<?php include 'navigation.php' ?>

<div class="parallax">
    <div class="container-content">
        <div class="content">
            <form class="content-content">
                <h1>
                    Admin-Bereich von easy2park.ch
                </h1>
                <br>
                <p>Bitte erfassen Sie Ihre Parkhausdaten. Vergewissern Sie sich, dass die Eingaben auch korrekt und
                    vollständig sind, damit Ihre Kunden Sie später ohne Probleme finden können.<br>
                </p>

                <br>
                <form id="form-parkhaus" class="form-parkhaus" method="post" action="#">
                    <div class="form-titel">Parkhaus-Besitzerangaben:</div>
                    <br>
                    <fieldset id="inputs">
                        <p><label for="b-firma">Firma:</label>
                            <input id="b-firma" name="b-firma" type="text" placeholder="Firmenname">
                        </p>
                        <p><label for="b-name">Name: </label>
                            <input id="b-name" name="b-name" type="text" placeholder="Name">
                        </p>
                        <p><label for="b-vorname">Vorname: </label>
                            <input id="b-vorname" name="b-vorname" type="text" placeholder="Vorname">
                        </p>
                        <p><label for="b-strasse">Strasse: </label>
                            <input id="b-strasse" name="b-strasse" type="text" placeholder="Strasse">
                        </p>
                        <p><label for="b-hausnummer">Hausnummer: </label>
                            <input id="b-hausnummer" name="b-hausnummer" type="number" placeholder="Hausnummer">
                        </p>
                        <p><label for="b-plz">Postleitzahl: </label>
                            <input id="b-plz" name="b-plz" type="number" placeholder="PLZ">
                        </p>
                        <p><label for="b-stadt">Stadt: </label>
                            <input id="b-stadt" name="b-stadt" type="text" placeholder="Stadt">
                        </p>
                        <p><label for="b-nummer">Telefonnummer: </label>
                            <input id="b-nummer" name="b-nummer" type="number" placeholder="Telefonnummer">
                        </p>

                        <label>Parkhausangaben:</label><br>

                        <p><label for="p-parkhaus">Parkhaus-Name: </label>
                            <input id="p-parkhaus" name="p-parkhaus" type="text" placeholder="Parkhaus-Name">
                        </p> <br>
                        <p><label for="p-strasse">Strasse / Hausnummer: </label>
                            <input id="p-strasse" name="p-strasse" type="text" placeholder="Strasse">
                        </p>
                        <p><label for="p-nummer">Strasse / Hausnummer: </label>
                            <input id="p-nummer" name="p-nummer" type="number" placeholder="Hausnummer">
                        </p>
                        <p><label for="p-plz">Postleitzahl / Stadt: </label>
                            <input id="p-plz" name="p-plz" type="number" placeholder="PLZ">
                        </p>
                        <p><label for="p-stadt">Postleitzahl / Stadt: </label>
                            <input id="p-stadt" name="p-stadt" type="text" placeholder="Stadt">
                        </p>
                        <input type="submit" value="Parkhausdaten Speichern" id="parkhausdaten">
                    </fieldset>
                </form>
        </div>
    </div>

</div>



