<?php include 'header.php' ?>

                <div class="uebersicht-title">
                    <h1>Parkhausübersicht</h1>
                </div>
                <div class="auswahl-parkhaus">
                    <!-- Dropdown zur auswahl sämtlicher Parkhäuser, welche in der Datenbank hinterlegt sind -->
                    <form method="get" action="php/api/parkhaus/list.php">
                        <select name="p_parkhaus">
                            <option value="parkhaus">Parkhaus auswählen</option>
                        </select>
                        <input id="daten-laden" type="submit" value="Lade Parkhausdaten"/>
                    </form>
                </div>
                <!-- Auflistung der hinterlegten Daten nach Kategorie -->
                <div class="liste-parkhaus">
                    <div class="parkhausuebersicht">Parkhausübersicht</div>
                </div>
                <div class="liste-besitzer">
                    <div class="besitzerübersicht">Besitzerübersicht</div>
                </div>
                <div class="maps-parkhaus">Google Maps darstellen</div>



<?php include 'footer.php' ?>