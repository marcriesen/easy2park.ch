<?php include 'header.php' ?>

                <div class="uebersicht-title">
                    <h1>Datenübersicht</h1>
                </div>
                <div class="auswahl-parkhaus">
                    <form method="post" action="php/api/parkhaus/list.php">
                        <select name="parkhausName">
                            <option value="parkhaus">Parkhaus auswähle</option>
                        </select>
                        <input id="daten-laden" type="submit" value="Lade Parkhausdaten"/>
                    </form>
                </div>

                <div class="liste-parkhaus">
                    <div class="parkhausuebersicht">Parkhausübersicht</div>
                </div>
                <div class="liste-besitzer">
                    <div class="besitzerübersicht">Besitzerübersicht</div>
                </div>
                <div class="maps-parkhaus">Google Maps darstellen</div>



<?php include 'footer.php' ?>